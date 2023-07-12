package com.campusdual.springontimize.model.core.service;


import com.campusdual.springontimize.api.core.service.IUserRoleService;

import com.campusdual.springontimize.model.core.dao.UserRoleDao;
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
@Service("UserRoleService")
public class UserRoleService implements IUserRoleService {

    @Autowired
    private UserRoleDao userRoleDao;
    @Autowired
    private DefaultOntimizeDaoHelper daoHelper;

    //Consulta el rol de un usuario
    @Override
    public EntityResult userroleQuery(Map<String, Object> keyMap, List<String> attrList) {
        return this.daoHelper.query(userRoleDao, keyMap, attrList);
    }

    // Consulta mi rol
    @Override
    public EntityResult myRoleQuery(Map<String, Object> keyMap, List<String> attrList) {
        attrList.add(UserRoleDao.ROLENAME);
        Authentication auth = SecurityContextHolder.getContext().getAuthentication();
        keyMap.put(UserRoleDao.user_, auth.getName());
        return this.daoHelper.query(userRoleDao, keyMap, attrList, "userRole");
    }

    //Inserta un rol a un usuario
    @Override
    public EntityResult userroleInsert(Map<String, Object> attrMap) {
        return this.daoHelper.insert(userRoleDao, attrMap);
    }

    //Actualiza un rol a un usuario
    @Override
    public EntityResult userroleUpdate(Map<String, Object> attrMap, Map<String, Object> keyMap) {
        return this.daoHelper.update(userRoleDao, attrMap, keyMap);
    }

    //Elimina un rol de un usuario
    @Override
    public EntityResult userroleDelete(Map<String, Object> keyMap) {
        return this.daoHelper.delete(this.userRoleDao, keyMap);
    }
}
