package com.campusdual.springontimize.model.core.dao;

import com.ontimize.jee.server.dao.common.ConfigurationFile;
import com.ontimize.jee.server.dao.jdbc.OntimizeJdbcDaoSupport;
import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Repository;

@Repository(value = "ProductFileDao")
@Lazy
@ConfigurationFile( configurationFile = "dao/ProductFileDao.xml",
        configurationFilePlaceholder = "dao/placeholders.properties")
public class ProductFileDao extends OntimizeJdbcDaoSupport {
    public static final String ATTR_ID = "id";
    public static final String ATTR_PRODUCT_ID = "product_id";
    public static final String ATTR_NAME = "name";
    public static final String ATTR_PATH = "file_path";
    public static final String ATTR_BASE64 = "base64";
}