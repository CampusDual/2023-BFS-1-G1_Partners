package com.campusdual.springontimize.api.core.service;


import com.ontimize.jee.common.dto.EntityResult;

import java.util.List;
import java.util.Map;


public interface IUserRoleService {

	public EntityResult userroleQuery(Map<?, ?> keyMap, List<?> attrList);
	public EntityResult userroleInsert(Map<?, ?> attrMap);
	public EntityResult userroleUpdate(Map<?, ?> attrMap, Map<?, ?> keyMap);
	public EntityResult userroleDelete(Map<?, ?> keyMap);

}
