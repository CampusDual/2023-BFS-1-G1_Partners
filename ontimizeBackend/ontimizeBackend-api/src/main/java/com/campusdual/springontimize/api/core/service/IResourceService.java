package com.campusdual.springontimize.api.core.service;


import com.ontimize.jee.common.dto.EntityResult;

import java.util.List;
import java.util.Map;


public interface IResourceService {

	public EntityResult resourceQuery(Map<?, ?> keyMap, List<?> attrList);

	public EntityResult resourceInsert(Map<?, ?> attrMap);

	public EntityResult resourceUpdate(Map<?, ?> attrMap, Map<?, ?> keyMap);

	public EntityResult resourceDelete(Map<?, ?> keyMap);






}
