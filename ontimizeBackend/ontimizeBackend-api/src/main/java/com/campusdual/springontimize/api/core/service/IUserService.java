package com.campusdual.springontimize.api.core.service;


import java.util.List;
import java.util.Map;

import com.ontimize.jee.common.dto.EntityResult;


public interface IUserService {

	public EntityResult userQuery(Map<String, Object> keyMap, List<String> attrList);

	public EntityResult userInsert(Map<String, Object> attrMap);

	public EntityResult userUpdate(Map<String, Object> attrMap, Map<String, Object> keyMap);

	public EntityResult userDelete(Map<String,Object> keyMap);

	public EntityResult partnerQuery(Map<String, Object> keyMap, List<String> attrList);

	public EntityResult adminQuery(Map<String, Object> keyMap, List<String> attrList);
	public EntityResult partnerAvailableQuery(Map<String, Object> keyMap, List<String> attrList);




}
