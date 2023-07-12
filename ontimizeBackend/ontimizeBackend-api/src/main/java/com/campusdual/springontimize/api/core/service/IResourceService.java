package com.campusdual.springontimize.api.core.service;


import com.ontimize.jee.common.dto.EntityResult;

import java.util.List;
import java.util.Map;


public interface IResourceService {

	//Consulta recursos
	public EntityResult resourceQuery(Map<String, Object> keyMap, List<String> attrList);

	//Inserta recursos
	public EntityResult resourceInsert(Map<String, Object>attrMap);

	//Actualiza recursos
	public EntityResult resourceUpdate(Map<String, Object> attrMap, Map<String, Object> keyMap);

	//Elimina recursos
	public EntityResult resourceDelete(Map<String, Object> keyMap);






}
