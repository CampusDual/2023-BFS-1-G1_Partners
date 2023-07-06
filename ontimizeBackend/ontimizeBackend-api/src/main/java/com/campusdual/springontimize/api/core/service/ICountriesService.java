package com.campusdual.springontimize.api.core.service;


import com.ontimize.jee.common.dto.EntityResult;

import java.util.List;
import java.util.Map;


public interface ICountriesService {

	public EntityResult countriesQuery(Map<String, Object> keyMap, List<String> attrList);

	public EntityResult countriesInsert(Map<String, Object> attrMap);






}
