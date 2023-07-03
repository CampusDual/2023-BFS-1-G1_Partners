package com.campusdual.springontimize.model.core.service;

import com.campusdual.springontimize.api.core.service.IPersonalDocumentService;
import com.campusdual.springontimize.model.core.dao.PersonalDocumentDao;

import com.ontimize.jee.common.dto.EntityResult;
import com.ontimize.jee.server.dao.DefaultOntimizeDaoHelper;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Lazy;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Map;

@Lazy
@Service("PersonalDocument")
public class PersonalDocumentService implements IPersonalDocumentService {

    @Autowired
    private PersonalDocumentDao personalDocumentDao;

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
}