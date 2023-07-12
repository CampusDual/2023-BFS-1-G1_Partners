package com.campusdual.springontimize.model.core.service;


import com.campusdual.springontimize.api.core.service.IResourceService;

import com.campusdual.springontimize.model.core.dao.ResourceDao;

import com.ontimize.jee.common.dto.EntityResult;

import com.ontimize.jee.server.dao.DefaultOntimizeDaoHelper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;


@Lazy
@Service("ResourceService")
public class ResourceService implements IResourceService {


    @Autowired
    private ResourceDao resourceDao;


    @Autowired
    private DefaultOntimizeDaoHelper daoHelper;

    //Consulta el documento seleccionado
    @Override
    public EntityResult resourceQuery(Map<String, Object> keyMap, List<String> attrList) {
        return this.daoHelper.query(resourceDao, keyMap, attrList, "documentfiles");
    }

    //Inserta un documento
    @Override
    public EntityResult resourceInsert(Map<String, Object> attrMap) {

        EntityResult insertResourceResult = this.daoHelper.insert(resourceDao, attrMap);

        if (!insertResourceResult.isWrong()) {

            Map<String, Object> attrToInsert = new HashMap<>();

            attrToInsert.put(ResourceDao.id, attrMap.get("id"));

            return this.daoHelper.insert(resourceDao, attrToInsert);

        } else {
            return insertResourceResult;
        }
    }

    //Actualiza un documento seleccionado
    @Override
    public EntityResult resourceUpdate(Map<String, Object> attrMap, Map<String, Object> keyMap) {
        return this.daoHelper.update(resourceDao, attrMap, keyMap);
    }

    //Elimina el documento seleccionado
    @Override
    public EntityResult resourceDelete(Map<String, Object> keyMap) {
        return this.daoHelper.delete(this.resourceDao, keyMap);
    }
}
