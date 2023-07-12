package com.campusdual.springontimize.api.core.service;

import java.util.List;
import java.util.Map;

import com.ontimize.jee.common.dto.EntityResult;

public interface IUserService {

	// Consulta de usuarios
	public EntityResult userQuery(Map<String, Object> keyMap, List<String> attrList);

	// Inserta un usuario
	public EntityResult userInsert(Map<String, Object> attrMap);

	// Inserta un nuevo socio
	public EntityResult newPartnerInsert(Map<String, Object> attrMap);

	// Inserta un nuevo administrador
	public EntityResult newAdminInsert(Map<String, Object> attrMap);

	// Actualiza mi usuario
	EntityResult myUserUpdate(Map<String, Object> attrMap, Map<String, Object> keyMap);

	// Actualiza un usuario
	public EntityResult userUpdate(Map<String, Object> attrMap, Map<String, Object> keyMap);

	// Elimina un usuario
	public EntityResult userDelete(Map<String, Object> keyMap);

	// Elimina un socio
	public EntityResult partnerDelete(Map<String, Object> keyMap);

	// Elimina un administrador
	public EntityResult adminDelete(Map<String, Object> keyMap);

	// Consulta mi usuario
	EntityResult myUserQuery(Map<Object, String> keyMap, List<String> attrList);

	// Consulta de socios
	public EntityResult partnerQuery(Map<String, Object> keyMap, List<String> attrList);

	// Consulta de productos de socio
	public EntityResult partnerProductQuery(Map<String, Object> keyMap, List<String> attrList);

	// Consulta de administradores
	public EntityResult adminQuery(Map<String, Object> keyMap, List<String> attrList);

	// Consulta de socios disponibles
	public EntityResult partnerAvailableQuery(Map<String, Object> keyMap, List<String> attrList);
}
