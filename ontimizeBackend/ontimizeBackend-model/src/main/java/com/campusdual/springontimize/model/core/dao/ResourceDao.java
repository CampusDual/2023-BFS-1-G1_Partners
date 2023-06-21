package com.campusdual.springontimize.model.core.dao;


import com.ontimize.jee.server.dao.common.ConfigurationFile;
import com.ontimize.jee.server.dao.jdbc.OntimizeJdbcDaoSupport;
import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Repository;


@Lazy
@Repository(value = "ResourceDao")
@ConfigurationFile(
	configurationFile = "dao/ResourceDao.xml",
	configurationFilePlaceholder = "dao/placeholders.properties")
public class ResourceDao extends OntimizeJdbcDaoSupport {

    public static final String id = "id";
    public static final String product_id = "product_id";
    public static final String resource_name = "resource_name";
    public static final String resource_type = "resource_type";




}
