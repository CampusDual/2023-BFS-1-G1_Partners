package com.campusdual.springontimize.api.core.service;

import com.ontimize.jee.common.dto.EntityResult;

import java.util.List;
import java.util.Map;

public interface IPersonalDocumentService {

    public EntityResult personalDocumentsQuery(Map<String, Object> keyMap, List<String> attrList);
    public EntityResult personalFilesQuery(Map<String, Object> keyMap, List<String> attrList);

    EntityResult myPersonalFilesQuery(Map<String, Object> keyMap, List<String> attrList);

    public EntityResult personalDocumentInsert(Map<String, Object> attrMap);
    public EntityResult personalDocumentUpdate(Map<String, Object> attrMap, Map<String, Object> keyMap);
    public EntityResult personalDocumentDelete(Map<String, Object> keyMap);

    //public EntityResult fileQuery(Map<String, Object> keyMap, List<String> attrList);

    //public EntityResult fileInsert(Map<String, Object> attrMap);

    //public EntityResult fileContentQuery(Map<String, Object> keyMap, List<String> attrList);

    //EntityResult fileDelete(Map<String, Object> keyMap);
}
