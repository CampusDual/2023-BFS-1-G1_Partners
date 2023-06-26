package com.campusdual.springontimize.api.core.service;


import com.ontimize.jee.common.dto.EntityResult;

import java.util.List;
import java.util.Map;


public interface IResourceService {

	public EntityResult resourceQuery(Map<String, Object> keyMap, List<String> attrList);

	public EntityResult resourceInsert(Map<String, Object>attrMap);

	public EntityResult resourceUpdate(Map<String, Object> attrMap, Map<String, Object> keyMap);

	public EntityResult resourceDelete(Map<String, Object> keyMap);






}
