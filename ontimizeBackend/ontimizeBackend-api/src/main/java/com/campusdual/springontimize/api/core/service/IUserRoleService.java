package com.campusdual.springontimize.api.core.service;

import com.ontimize.jee.common.dto.EntityResult;

import java.util.List;
import java.util.Map;

public interface IUserRoleService {

	// Consulta los roles de usuario
	public EntityResult userroleQuery(Map<String, Object> keyMap, List<String> attrList);

	// Consulta mi rol
	public EntityResult myRoleQuery(Map<String, Object> keyMap, List<String> attrList);

	// Inserta un rol de usuario
	public EntityResult userroleInsert(Map<String, Object> attrMap);

	// Actualiza un rol de usuario
	public EntityResult userroleUpdate(Map<String, Object> attrMap, Map<String, Object> keyMap);

	// Elimina un rol de usuario
	public EntityResult userroleDelete(Map<String, Object> keyMap);
}
