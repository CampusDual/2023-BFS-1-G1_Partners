package com.campusdual.springontimize.api.core.service;


import com.ontimize.jee.common.dto.EntityResult;

import java.util.List;
import java.util.Map;


public interface IUserProductService {

    public EntityResult userProductQuery(Map<Object, String> keyMap, List<?> attrList);
    public EntityResult userAllProductsQuery(Map<Object, String> keyMap, List<?> attrList);
    public EntityResult userProductInsert(Map<?, ?> attrMap);
    public EntityResult userProductUpdate(Map<?, ?> attrMap, Map<?, ?> keyMap);
    EntityResult userAllProductsUpdate(Map<?, ?> attrMap, Map<?, ?> keyMap);

    public EntityResult userProductDelete(Map<?, ?> keyMap);

}
