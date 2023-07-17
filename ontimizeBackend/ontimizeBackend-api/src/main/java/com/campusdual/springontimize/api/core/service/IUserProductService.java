package com.campusdual.springontimize.api.core.service;

import com.ontimize.jee.common.dto.EntityResult;

import java.util.List;
import java.util.Map;

public interface IUserProductService {

    // Consulta productos del usuario
    public EntityResult userProductQuery(Map<Object, String> keyMap, List<String> attrList);

    // Consulta los productos de un usuario cuando eres admin
    public EntityResult productsByUserQuery(Map<Object, String> keyMap, List<String> attrList);

    // Consulta productos del usuario sin usar usuario
    public EntityResult productsUserQuery(Map<Object, String> keyMap, List<String> attrList);

    // Consulta todos los productos de un usuario
    public EntityResult userAllProductsQuery(Map<Object, String> keyMap, List<String> attrList);

    // Inserta un producto del usuario
    public EntityResult userProductInsert(Map<String, Object> attrMap);

    // Actualiza un producto del usuario
    public EntityResult userProductUpdate(Map<String, Object> attrMap, Map<String, Object> keyMap);

    // Elimina todos los productos de un usuario
    public EntityResult userAllProductsDelete(Map<String, Object> keyMap);

    // Elimina un producto del usuario
    public EntityResult userProductDelete(Map<String, Object> keyMap);

    // Elimina productos de usuario
    public EntityResult productsUserDelete(Map<String, Object> keyMap);

    // Inserta productos de usuario
    public EntityResult productsUserInsert(Map<String, Object> attrMap);

    // Actualiza todos los productos de un usuario
    public EntityResult userAllProductsUpdate(Map<String, Object> attrMap, Map<String, Object> keyMap);
}
