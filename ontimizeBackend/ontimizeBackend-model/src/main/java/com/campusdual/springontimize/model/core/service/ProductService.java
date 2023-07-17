package com.campusdual.springontimize.model.core.service;

import com.campusdual.springontimize.api.core.service.IProductService;
import com.campusdual.springontimize.model.core.dao.*;
import com.ontimize.jee.common.dto.EntityResult;
import com.ontimize.jee.common.dto.EntityResultMapImpl;
import com.ontimize.jee.common.gui.SearchValue;
import com.ontimize.jee.server.dao.DefaultOntimizeDaoHelper;
import org.apache.commons.codec.binary.Base64;
import org.apache.commons.io.FileUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Lazy;
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
@Service("ProductService")
public class ProductService implements IProductService {

    @Autowired
    private ProductDao productDao;

    @Autowired
    private ProductFileDao productFileDao;
    @Autowired
    private UserProductDao userProductDao;
    @Autowired
    private DefaultOntimizeDaoHelper daoHelper;

    @Value("${aap.files.path}")
    private String path;

    //Consulta el producto seleccionado
    @Override
    public EntityResult productQuery(Map<String, Object> keyMap, List<String> attrList) {
        return daoHelper.query(productDao, keyMap, attrList);
    }

    //Inserta el producto seleccionado en la bbdd
    @Override
    public EntityResult productInsert(Map<String, Object> attrMap) {
        return daoHelper.insert(productDao, attrMap);
    }

    //Actualiza el producto seleccionado
    @Override
    public EntityResult productUpdate(Map<String, Object> attrMap, Map<String, Object> keyMap) {
        return daoHelper.update(productDao, attrMap, keyMap);
    }

    //Borra el producto seleccionado
    @Override
    public EntityResult productDelete(Map<String, Object> keyMap) {
        return daoHelper.delete(productDao, keyMap);
    }

    //Consulta el documento seleccionado
    public EntityResult fileQuery(Map<String, Object> keyMap, List<String> attrList) {
        return daoHelper.query(productFileDao, keyMap, attrList);
    }

    //Recoge el documento seleccionado
    @Override
    public EntityResult fileContentQuery(Map<String, Object> keyMap, List<String> attrList) {
        attrList.add(ProductFileDao.ATTR_PATH);
        attrList.remove(ProductFileDao.ATTR_BASE64);
        EntityResult fileResult = daoHelper.query(productFileDao, keyMap, attrList);
        List<String> base64Files = new ArrayList<>();
        //por cada archivo calcula el valor del Base64
        for (int i = 0; i < fileResult.calculateRecordNumber(); i++) {
            String filePath = (String) fileResult.getRecordValues(i).get(ProductFileDao.ATTR_PATH);
            File file = new File(filePath);
            try {
                //calcula el Base64
                byte[] encoded = Base64.encodeBase64(FileUtils.readFileToByteArray(file));
                base64Files.add(new String(encoded));
            } catch (IOException e) {
                throw new RuntimeException(e);
            }
        }
        //añade los valores Base64 por cada archivo
        fileResult.put(ProductFileDao.ATTR_BASE64, base64Files);
        return fileResult;
    }

    //Inserta en la bbdd el documento seleccionado
    @Override
    public EntityResult fileInsert(Map<String, Object> attrMap) {
        return daoHelper.insert(productFileDao, attrMap);
    }


    //Borra el documento seleccionado fisico y de la bbdd
    @Override
    public EntityResult fileDelete(Map<String, Object> keyMap) {
        List<String> attrList = new ArrayList<>();
        attrList.add(PersonalDocumentFileDao.ATTR_PATH);
        EntityResult fileResult = daoHelper.query(productFileDao, keyMap, attrList);

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
        return daoHelper.delete(productFileDao, keyMap);
    }

    //Recoge los productos que no esten asignados a un usuario
    @Override
    public EntityResult productsAvailableQuery(Map<String, Object> keyMap, List<String> attrList) {
        List<Integer> products = null;
        if (keyMap.get(UserProductDao.ATTR_USER_ID) != null) {
            Map<String, Object> keys = new HashMap<>();
            List<String> attr = new ArrayList<>();
            attr.add(UserProductDao.ATTR_PRODUCT_ID);
            keys.put(UserProductDao.ATTR_USER_ID, keyMap.get(UserProductDao.ATTR_USER_ID));
            EntityResult productsRelations = this.daoHelper.query(userProductDao, keys, attr);
            if (productsRelations.isWrong()) {
                return productsRelations;
            }
            if (!productsRelations.isEmpty()) {
                products = new ArrayList<>();
                for (int i = 0; i < productsRelations.calculateRecordNumber(); i++) {
                    products.add((Integer) productsRelations.getRecordValues(i).get(UserProductDao.ATTR_PRODUCT_ID));
                }
            }
        }
        if (products != null) {
            keyMap.put(ProductDao.ATTR_ID, new SearchValue(SearchValue.NOT_IN, products));
        }
        return this.daoHelper.query(productDao, keyMap, attrList);
    }


    //Recoge los documentos, genera un zip y los inserta en este
    public EntityResult filesZipQuery(Map<String, Object> keyMap, List<String> attrList) throws IOException {
        ArrayList<Integer> documents_ids = (ArrayList<Integer>) keyMap.get("ids");

        List<String> fileAttrList = Arrays.asList(PersonalDocumentFileDao.ATTR_PATH, PersonalDocumentFileDao.ATTR_NAME);

        EntityResult fileResult = null;


        String directory = path;
        Timestamp timestamp = Timestamp.from(Instant.now());
        String zipName = timestamp.getTime() + ".zip";
        final FileOutputStream fos = new FileOutputStream(directory + "\\" + zipName);
        ZipOutputStream zipOut = new ZipOutputStream(fos);

        for (Integer document_id : documents_ids) {
            HashMap<String, Object> fileKeyMap = new HashMap<>();
            fileKeyMap.put(PersonalDocumentFileDao.ATTR_ID, document_id);
            fileResult = daoHelper.query(productFileDao, fileKeyMap, fileAttrList);
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
            zipResult.put(PersonalDocumentFileDao.ATTR_BASE64, new String(encoded));
        } catch (IOException e) {
            throw new RuntimeException(e);
        }

        return zipResult;


    }
}

