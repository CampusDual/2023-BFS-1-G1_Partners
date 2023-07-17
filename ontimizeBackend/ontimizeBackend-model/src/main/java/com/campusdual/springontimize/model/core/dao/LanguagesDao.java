package com.campusdual.springontimize.model.core.dao;


import com.ontimize.jee.server.dao.common.ConfigurationFile;
import com.ontimize.jee.server.dao.jdbc.OntimizeJdbcDaoSupport;
import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Repository;


@Lazy
@Repository(value = "LanguagesDao")
@ConfigurationFile(
        configurationFile = "dao/LanguagesDao.xml",
        configurationFilePlaceholder = "dao/placeholders.properties")
public class LanguagesDao extends OntimizeJdbcDaoSupport {


    public static final String id = "id";
    public static final String language = "language";

}
