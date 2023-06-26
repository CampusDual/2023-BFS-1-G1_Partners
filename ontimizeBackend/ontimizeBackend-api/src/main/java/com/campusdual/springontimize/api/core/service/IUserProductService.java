package com.campusdual.springontimize.api.core.service;


import com.ontimize.jee.common.dto.EntityResult;

import java.util.List;
import java.util.Map;


public interface IUserProductService {

    public EntityResult userProductQuery(Map<Object, String> keyMap, List<String> attrList);
    public EntityResult productsByUserQuery(Map<Object, String> keyMap, List<String> attrList);
    public EntityResult userAllProductsQuery(Map<Object, String> keyMap, List<String> attrList);
    public EntityResult userProductInsert(Map<String, Object>attrMap);
    public EntityResult userProductUpdate(Map<String, Object> attrMap, Map<String, Object> keyMap);
    EntityResult userAllProductsUpdate(Map<String, Object>attrMap, Map<String, Object>keyMap);

    public EntityResult userAllProductsDelete(Map<String, Object> keyMap);
    public EntityResult userProductDelete(Map<String, Object> keyMap);

}
