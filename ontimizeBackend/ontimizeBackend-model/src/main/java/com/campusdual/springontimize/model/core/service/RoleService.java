package com.campusdual.springontimize.model.core.service;

import com.campusdual.springontimize.api.core.service.IRoleService;
import com.campusdual.springontimize.model.core.dao.RoleDao;
import com.ontimize.jee.common.dto.EntityResult;
import com.ontimize.jee.server.dao.DefaultOntimizeDaoHelper;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.List;
import java.util.Map;

public class RoleService implements IRoleService {

    @Autowired
    private RoleDao roleDao;

    @Autowired
    private DefaultOntimizeDaoHelper daoHelper;

    @Override
    public EntityResult roleQuery(Map<?, ?> keyMap, List<?> attrList) {
        return this.daoHelper.query(roleDao, keyMap, attrList);
    }
}
