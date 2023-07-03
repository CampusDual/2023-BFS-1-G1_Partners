package com.campusdual.springontimize.model.core.service;

import com.campusdual.springontimize.api.core.service.IPersonalDocumentService;
import com.campusdual.springontimize.model.core.dao.PersonalDocumentDao;

import com.campusdual.springontimize.model.core.dao.PersonalDocumentFileDao;
import com.ontimize.jee.common.dto.EntityResult;
import com.ontimize.jee.server.dao.DefaultOntimizeDaoHelper;

import org.apache.commons.codec.binary.Base64;
import org.apache.commons.io.FileUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Lazy;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

import java.io.File;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;

@Lazy
@Service("PersonalDocument")
public class PersonalDocumentService implements IPersonalDocumentService {

    @Autowired
    private PersonalDocumentDao personalDocumentDao;

    @Autowired
    private PersonalDocumentFileDao personalDocumentFileDao;

    @Autowired
    private DefaultOntimizeDaoHelper daoHelper;

    @Override
    public EntityResult personalDocumentsQuery(Map<String, Object> keyMap, List<String> attrList) {
        EntityResult result = daoHelper.query(personalDocumentDao,keyMap,attrList);

        return result;
    }

    @Override
    public EntityResult personalFilesQuery(Map<String, Object> keyMap, List<String> attrList) {
        return daoHelper.query(personalDocumentDao,keyMap,attrList,"documentfiles");
    }

    @Override

    public EntityResult myPersonalFilesQuery(Map<String, Object> keyMap, List<String> attrList) {
    keyMap.put("user_id",getUser());
    return daoHelper.query(personalDocumentDao,keyMap,attrList,"documentfiles");
    }


    private String getUser(){
        Authentication auth = SecurityContextHolder.getContext().getAuthentication();
        return auth.getName();
    }

    @Override
    public EntityResult personalDocumentInsert(Map<String, Object> attrMap) {
        return daoHelper.insert(personalDocumentDao,attrMap);
    }

    @Override
    public EntityResult personalDocumentUpdate(Map<String, Object> attrMap, Map<String, Object> keyMap) {
        return daoHelper.update(personalDocumentDao,attrMap,keyMap);
    }

    @Override
    public EntityResult personalDocumentDelete(Map<String, Object> keyMap) {
        return daoHelper.delete(personalDocumentDao,keyMap);
    }

    @Override
    public EntityResult myPersonalFilesContentQuery(Map<String, Object> keyMap, List<String> attrList) {
        attrList.add(PersonalDocumentFileDao.ATTR_PATH);
        attrList.remove(PersonalDocumentFileDao.ATTR_BASE64);
        EntityResult fileResult = daoHelper.query(personalDocumentFileDao,keyMap,attrList);
        List<String> base64Files = new ArrayList<>();
        //for each file calculate the Base64 value of the local file
        for(int i=0;i<fileResult.calculateRecordNumber();i++){
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
        fileResult.put(PersonalDocumentFileDao.ATTR_BASE64,base64Files);
        return fileResult;
    }

}