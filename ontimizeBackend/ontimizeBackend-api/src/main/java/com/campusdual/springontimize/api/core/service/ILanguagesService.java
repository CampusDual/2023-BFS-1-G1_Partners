package com.campusdual.springontimize.api.core.service;

import com.ontimize.jee.common.dto.EntityResult;
import java.util.List;
import java.util.Map;

public interface ILanguagesService {

	// Realiza una consulta en la base de datos de todos los idiomas.
	public EntityResult languagesQuery(Map<String, Object> keyMap, List<String> attrList);

	// Inserta un nuevo registro de idioma en la base de datos.
	public EntityResult languagesInsert(Map<String, Object> attrMap);
}
