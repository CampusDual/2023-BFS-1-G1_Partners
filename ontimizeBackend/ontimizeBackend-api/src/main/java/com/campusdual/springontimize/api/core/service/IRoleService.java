package com.campusdual.springontimize.api.core.service;

import com.ontimize.jee.common.dto.EntityResult;

import java.util.List;
import java.util.Map;

public interface IRoleService {

    //Consulta el rol del usuario
    public EntityResult roleQuery(Map<String, Object> keyMap, List<String> attrList);
}
