package com.campusdual.springontimize.api.core.service;

import com.ontimize.jee.common.dto.EntityResult;

import java.util.List;
import java.util.Map;

public interface ICountriesService {

    // Consulta de todos los países.
    public EntityResult countriesQuery(Map<String, Object> keyMap, List<String> attrList);

    // Inserta un nuevo registro de país en la base de datos.
    public EntityResult countriesInsert(Map<String, Object> attrMap);
}
