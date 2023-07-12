package com.campusdual.springontimize.model.core.service;

import com.campusdual.springontimize.api.core.service.IPersonalDocumentService;
import com.campusdual.springontimize.model.core.dao.PersonalDocumentDao;

import com.campusdual.springontimize.model.core.dao.PersonalDocumentFileDao;
import com.fasterxml.jackson.databind.util.JSONPObject;
import com.ontimize.jee.common.dto.EntityResult;
import com.ontimize.jee.common.dto.EntityResultMapImpl;
import com.ontimize.jee.server.dao.DefaultOntimizeDaoHelper;

import org.apache.commons.codec.binary.Base64;
import org.apache.commons.io.FileUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Lazy;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.IOException;
import java.sql.Timestamp;
import java.time.Instant;
import java.util.*;
import java.util.zip.ZipEntry;
import java.util.zip.ZipOutputStream;

@Lazy
@Service("PersonalDocument")
public class PersonalDocumentService implements IPersonalDocumentService {

    @Autowired
    private PersonalDocumentDao personalDocumentDao;

    @Autowired
    private PersonalDocumentFileDao personalDocumentFileDao;

    @Autowired
    private DefaultOntimizeDaoHelper daoHelper;
    @Value("${aap.files.path}")
    private String path;

    //Consulta los documentos
    @Override
    public EntityResult personalDocumentsQuery(Map<String, Object> keyMap, List<String> attrList) {
        EntityResult result = daoHelper.query(personalDocumentDao, keyMap, attrList);

        return result;
    }

    //Consulta los archivos
    @Override
    public EntityResult personalFilesQuery(Map<String, Object> keyMap, List<String> attrList) {
        return daoHelper.query(personalDocumentDao, keyMap, attrList, "documentfiles");
    }

    //Consulta los archivos que esten asociados a mi usuario
    @Override
    public EntityResult myPersonalFilesQuery(Map<String, Object> keyMap, List<String> attrList) {
        keyMap.put("user_id", getUser());
        return daoHelper.query(personalDocumentDao, keyMap, attrList, "documentfiles");
    }

    //Recoge mi nombre de usuario
    private String getUser() {
        Authentication auth = SecurityContextHolder.getContext().getAuthentication();
        return auth.getName();
    }

    //Inserta el documento seleccionado
    @Override
    public EntityResult personalDocumentInsert(Map<String, Object> attrMap) {
        return daoHelper.insert(personalDocumentDao, attrMap);
    }

    //Actualiza el documento seleccionado
    @Override
    public EntityResult personalDocumentUpdate(Map<String, Object> attrMap, Map<String, Object> keyMap) {
        return daoHelper.update(personalDocumentDao, attrMap, keyMap);
    }

    //Borra el documento seleccionado
    @Override
    public EntityResult personalDocumentDelete(Map<String, Object> keyMap) {
        return daoHelper.delete(personalDocumentDao, keyMap);
    }

    //Borra el archivo seleccionado fisico y en la bbdd
    @Override
    public EntityResult personalFilesDelete(Map<String, Object> keyMap) {
        List<String> attrList = new ArrayList<>();
        attrList.add(PersonalDocumentFileDao.ATTR_PATH);
        EntityResult fileResult = daoHelper.query(personalDocumentFileDao, keyMap, attrList);

        if (fileResult.isWrong()) {
            return fileResult;
        }
        String filePath = (String) fileResult.getRecordValues(0).get(PersonalDocumentFileDao.ATTR_PATH);
        if (filePath != null && !filePath.isEmpty()) {
            File fichero = new File(filePath);
            if (fichero.delete()) {

            } else {
                EntityResult errorResult = new EntityResultMapImpl();
                errorResult.setCode(EntityResult.OPERATION_WRONG);
                errorResult.setMessage("FILE ERROR ON DELETE ");
                return errorResult;
            }
        }
        return daoHelper.delete(personalDocumentFileDao, keyMap);
    }

    //Recoge los documentos seleccionados
    @Override
    public EntityResult myPersonalFilesContentQuery(Map<String, Object> keyMap, List<String> attrList) {
        attrList.add(PersonalDocumentFileDao.ATTR_PATH);
        attrList.remove(PersonalDocumentFileDao.ATTR_BASE64);
        EntityResult fileResult = daoHelper.query(personalDocumentFileDao, keyMap, attrList);
        List<String> base64Files = new ArrayList<>();
        //for each file calculate the Base64 value of the local file
        for (int i = 0; i < fileResult.calculateRecordNumber(); i++) {
            String filePath = (String) fileResult.getRecordValues(i).get(PersonalDocumentFileDao.ATTR_PATH);
            File file = new File(filePath);
            try {
                //calculate the Base64
                byte[] encoded = Base64.encodeBase64(FileUtils.readFileToByteArray(file));
                base64Files.add(new String(encoded));
            } catch (IOException e) {
                throw new RuntimeException(e);
            }
        }
        //add all the Base64 values for each file
        fileResult.put(PersonalDocumentFileDao.ATTR_BASE64, base64Files);
        return fileResult;
    }

    //Inserta el archivo en la bbdd
    @Override
    public EntityResult personalFileInsert(Map<String, Object> attrMap) {
        return daoHelper.insert(personalDocumentFileDao, attrMap);
    }

    //Recoge los documentos, genera un zip y los inserta en este
    public EntityResult filesZipQuery(Map<String, Object> keyMap, List<String> attrList) throws IOException {
        ArrayList<Integer> documents_ids = (ArrayList<Integer>) keyMap.get("ids");

        List<String> fileAttrList = Arrays.asList(PersonalDocumentFileDao.ATTR_PATH, PersonalDocumentFileDao.ATTR_NAME);

        EntityResult fileResult = null;

        String user = getUser();
        String directory = path + user;
        Timestamp timestamp = Timestamp.from(Instant.now());
        String zipName = user + timestamp.getTime() + ".zip";
        final FileOutputStream fos = new FileOutputStream(directory + "\\" + zipName);
        ZipOutputStream zipOut = new ZipOutputStream(fos);

        for (Integer document_id : documents_ids) {
            HashMap<String, Object> fileKeyMap = new HashMap<>();
            fileKeyMap.put(PersonalDocumentFileDao.ATTR_ID, document_id);
            fileResult = daoHelper.query(personalDocumentFileDao, fileKeyMap, fileAttrList);
            String srcFile = (String) fileResult.getRecordValues(0).get(PersonalDocumentFileDao.ATTR_PATH);
            File fileToZip = new File(srcFile);
            FileInputStream fis = new FileInputStream(fileToZip);
            ZipEntry zipEntry = new ZipEntry(fileToZip.getName());
            zipOut.putNextEntry(zipEntry);

            byte[] bytes = new byte[1024];
            int length;
            while ((length = fis.read(bytes)) >= 0) {
                zipOut.write(bytes, 0, length);
            }
            fis.close();
        }

        zipOut.close();
        fos.close();
        EntityResult zipResult = new EntityResultMapImpl();
        zipResult.put(PersonalDocumentFileDao.ATTR_NAME, zipName);

        String filePath = directory + "\\" + zipName;
        File file = new File(filePath);
        try {
            //calculate the Base64
            byte[] encoded = Base64.encodeBase64(FileUtils.readFileToByteArray(file));
            zipResult.put(PersonalDocumentFileDao.ATTR_BASE64,new String(encoded));
        } catch (IOException e) {
            throw new RuntimeException(e);
        }

        return zipResult;


    }


}
