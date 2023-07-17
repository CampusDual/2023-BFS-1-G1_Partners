package com.campusdual.springontimize.model.core.dao;

import com.ontimize.jee.server.dao.common.ConfigurationFile;
import com.ontimize.jee.server.dao.jdbc.OntimizeJdbcDaoSupport;
import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Repository;

@Repository(value = "PersonalDocumentDao")
@Lazy
@ConfigurationFile(
        configurationFile = "dao/PersonalDocumentDao.xml",
        configurationFilePlaceholder = "dao/placeholders.properties"
)

public class PersonalDocumentDao extends OntimizeJdbcDaoSupport {
    public static final String ATTR_ID = "id";
    public static final String ATTR_NAME = "name";
}
