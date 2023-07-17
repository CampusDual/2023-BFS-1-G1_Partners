package com.campusdual.springontimize.model.core.dao;

import com.ontimize.jee.server.dao.common.ConfigurationFile;
import com.ontimize.jee.server.dao.jdbc.OntimizeJdbcDaoSupport;
import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Repository;

@Repository(value = "UserProductDao")
@Lazy
@ConfigurationFile(
        configurationFile = "dao/UserProductDao.xml",
        configurationFilePlaceholder = "dao/placeholders.properties")
public class UserProductDao extends OntimizeJdbcDaoSupport {
    public static final String ATTR_PRODUCT_ID = "product_id";
    public static final String ATTR_USER_ID = "user_id";
}
