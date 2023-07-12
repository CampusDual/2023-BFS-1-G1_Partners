package com.campusdual.springontimize.model.core.service;


import com.campusdual.springontimize.api.core.service.IUserProductService;
import com.campusdual.springontimize.model.core.dao.UserProductDao;
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
@Service("UserProductService")
public class UserProductService implements IUserProductService {

    @Autowired
    private UserProductDao userProductDao;
    @Autowired
    private DefaultOntimizeDaoHelper daoHelper;

    //Recoge mi nombre de usuario
    private String getUser() {
        Authentication auth = SecurityContextHolder.getContext().getAuthentication();
        return auth.getName();
    }

    //Consulta los productos que esten asociados a mi usuario
    @Override
    public EntityResult userProductQuery(Map<Object, String> keyMap, List<String> attrList) {

        keyMap.put("user_id", getUser());
        return this.daoHelper.query(userProductDao, keyMap, attrList);
    }

    // Consulta los productos de un usuario cuando eres admin
    @Override
    public EntityResult productsByUserQuery(Map<Object, String> keyMap, List<String> attrList) { //CAMBIAR NOMBRE A MY PRODUCTS

        keyMap.put("user_id", getUser());
        return this.daoHelper.query(userProductDao, keyMap, attrList, "productsByUser");
    }

    // Consulta productos del usuario sin usar usuario
    @Override
    public EntityResult productsUserQuery(Map<Object, String> keyMap, List<String> attrList) {
        return this.daoHelper.query(userProductDao, keyMap, attrList, "productsByUser");
    }

    //Consulta todos los productos de un usario
    @Override
    public EntityResult userAllProductsQuery(Map<Object, String> keyMap, List<String> attrList) {
        return this.daoHelper.query(userProductDao, keyMap, attrList);
    }

    //Inserta un producto en un usuario
    @Override
    public EntityResult userProductInsert(Map<String, Object> attrMap) {
        return this.daoHelper.insert(userProductDao, attrMap);
    }

    //Actualiza un producto de un usuario
    @Override
    public EntityResult userProductUpdate(Map<String, Object> attrMap, Map<String, Object> keyMap) {
        return this.daoHelper.update(userProductDao, attrMap, keyMap);
    }

    //Actualiza todos los productos de un usuario
    @Override
    public EntityResult userAllProductsUpdate(Map<String, Object> attrMap, Map<String, Object> keyMap) {
        return this.daoHelper.update(userProductDao, attrMap, keyMap);
    }

    //Borra un producto de un usuario
    @Override
    public EntityResult userProductDelete(Map<String, Object> keyMap) {
        return this.daoHelper.delete(this.userProductDao, keyMap);
    }

    //Borra todos los productos de un usuario
    @Override
    public EntityResult userAllProductsDelete(Map<String, Object> keyMap) {
        return this.daoHelper.delete(this.userProductDao, keyMap);
    }

    //Borra un usuario de un producto
    @Override
    public EntityResult productsUserDelete(Map<String, Object> keyMap) {
        return this.daoHelper.delete(this.userProductDao, keyMap);
    }

    //Inserta un usuario en un producto
    @Override
    public EntityResult productsUserInsert(Map<String, Object> attrMap) {
        return this.daoHelper.insert(userProductDao, attrMap);
    }
}
