package com.campusdual.springontimize.model.core.dao;


import com.ontimize.jee.server.dao.common.ConfigurationFile;
import com.ontimize.jee.server.dao.jdbc.OntimizeJdbcDaoSupport;
import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Repository;


@Lazy
@Repository(value = "CountriesDao")
@ConfigurationFile(
	configurationFile = "dao/CountriesDao.xml",
	configurationFilePlaceholder = "dao/placeholders.properties")
public class CountriesDao extends OntimizeJdbcDaoSupport {


    public static final String id = "id";
    public static final String country = "country";

}
