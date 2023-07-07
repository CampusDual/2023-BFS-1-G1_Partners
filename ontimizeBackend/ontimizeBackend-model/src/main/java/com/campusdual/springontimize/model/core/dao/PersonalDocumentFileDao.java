package com.campusdual.springontimize.model.core.dao;

import com.ontimize.jee.server.dao.common.ConfigurationFile;
import com.ontimize.jee.server.dao.jdbc.OntimizeJdbcDaoSupport;
import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Repository;

@Repository(value = "PersonalDocumentFileDao")
@Lazy
@ConfigurationFile( configurationFile = "dao/PersonalDocumentFileDao.xml",
        configurationFilePlaceholder = "dao/placeholders.properties")

public class PersonalDocumentFileDao extends OntimizeJdbcDaoSupport {
    public static final String ATTR_ID = "id";
    public static final String ATTR_USER_ID = "user_id";
    public static final String ATTR_PERSONAL_DOCUMENT_ID = "personal_document_id"; // CAMBIAR EN BBDD Y AQUI EL NOMBRE
    public static final String ATTR_NAME = "name";
    public static final String ATTR_PATH = "file_path";
    public static final String ATTR_BASE64 = "base64";
    public static final String ATTR_DESCRIPTION = "description";

}