package com.campusdual.springontimize.model.core.dao;

import com.ontimize.jee.server.dao.common.ConfigurationFile;
import com.ontimize.jee.server.dao.jdbc.OntimizeJdbcDaoSupport;
import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Repository;

@Repository(value = "ProductDao")
@Lazy
@ConfigurationFile(
        configurationFile = "dao/ProductDao.xml",
        configurationFilePlaceholder = "dao/placeholders.properties"
)

public class ProductDao extends OntimizeJdbcDaoSupport {
    public static final String ATTR_ID ="id";
    public static final String ATTR_NAME ="name";
    public static final String name = "name";
    public static final String surname = "surname";


}
