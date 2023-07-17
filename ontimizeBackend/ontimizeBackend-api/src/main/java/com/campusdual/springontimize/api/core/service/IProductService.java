package com.campusdual.springontimize.api.core.service;

import com.ontimize.jee.common.dto.EntityResult;

import java.io.IOException;
import java.util.List;
import java.util.Map;

public interface IProductService {

    //Consulta productos
    public EntityResult productQuery(Map<String, Object> keyMap, List<String> attrList);

    //Inserta productos
    public EntityResult productInsert(Map<String, Object> attrMap);

    //Actualiza productos
    public EntityResult productUpdate(Map<String, Object> attrMap, Map<String, Object> keyMap);

    //Elimina productos
    public EntityResult productDelete(Map<String, Object> keyMap);

    //Consulta archivos
    public EntityResult fileQuery(Map<String, Object> keyMap, List<String> attrList);

    //Inserta archivos
    public EntityResult fileInsert(Map<String, Object> attrMap);

    //Consulta contenido de archivos
    public EntityResult fileContentQuery(Map<String, Object> keyMap, List<String> attrList);

    //Elimina archivos
    EntityResult fileDelete(Map<String, Object> keyMap);

    //Consulta productos disponibles
    EntityResult productsAvailableQuery(Map<String, Object> keyMap, List<String> attrList);

    //Consult archivos zip
    EntityResult filesZipQuery(Map<String, Object> keyMap, List<String> attrList) throws IOException;
}
