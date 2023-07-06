package com.campusdual.springontimize.api.core.service;


import com.ontimize.jee.common.dto.EntityResult;

import java.util.List;
import java.util.Map;


public interface ILanguagesService {

	public EntityResult languagesQuery(Map<String, Object> keyMap, List<String> attrList);

	public EntityResult languagesInsert(Map<String, Object> attrMap);






}
