package com.campusdual.springontimize.model.core.service;

import com.campusdual.springontimize.api.core.service.ILanguagesService;
import com.campusdual.springontimize.model.core.dao.LanguagesDao;
import com.ontimize.jee.common.dto.EntityResult;
import com.ontimize.jee.server.dao.DefaultOntimizeDaoHelper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Map;


@Lazy
@Service("LanguagesService")
public class LanguagesService implements ILanguagesService {


    @Autowired
    private LanguagesDao languagesDao;
    @Autowired
    private DefaultOntimizeDaoHelper daoHelper;


    //Consulta lenguajes
    @Override
    public EntityResult languagesQuery(Map<String, Object> keyMap, List<String> attrList) {
        return daoHelper.query(languagesDao, keyMap, attrList);

    }

    //Inserta lenguajes
    @Override
    public EntityResult languagesInsert(Map<String, Object> attrMap) {
        return this.daoHelper.insert(languagesDao, attrMap);
    }


}
