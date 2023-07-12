package com.campusdual.springontimize.api.core.service;

import com.ontimize.jee.common.dto.EntityResult;

import java.io.IOException;
import java.util.List;
import java.util.Map;

public interface IPersonalDocumentService {

    //Consulta todos los documentos personales
    public EntityResult personalDocumentsQuery(Map<String, Object> keyMap, List<String> attrList);

    //Consulta todos los archivos personales
    public EntityResult personalFilesQuery(Map<String, Object> keyMap, List<String> attrList);

    //Inserta archivos personales
    public EntityResult personalFileInsert(Map<String, Object> attrMap);

    //Inserta documentos personales
    public EntityResult personalDocumentInsert(Map<String, Object> attrMap);

    //Actualiza documentos personales
    public EntityResult personalDocumentUpdate(Map<String, Object> attrMap, Map<String, Object> keyMap);

    //Elimina documentos personales
    public EntityResult personalDocumentDelete(Map<String, Object> keyMap);


    //Consulta los archivos personales de ese usuario
    EntityResult myPersonalFilesQuery(Map<String, Object> keyMap, List<String> attrList);

    //Elimina archivos personales
    EntityResult personalFilesDelete(Map<String, Object> keyMap) ;

    //Consulta el contenido de los archivos personales de ese usuario
    EntityResult myPersonalFilesContentQuery(Map<String, Object> keyMap, List<String> attrList);

    //Consult archivos zip
    EntityResult filesZipQuery(Map<String, Object> keyMap, List<String> attrList) throws IOException;

}
