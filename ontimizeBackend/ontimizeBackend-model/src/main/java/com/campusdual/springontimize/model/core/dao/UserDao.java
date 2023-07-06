package com.campusdual.springontimize.model.core.dao;


import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Repository;

import com.ontimize.jee.server.dao.common.ConfigurationFile;
import com.ontimize.jee.server.dao.jdbc.OntimizeJdbcDaoSupport;


@Lazy
@Repository(value = "UserDao")
@ConfigurationFile(
	configurationFile = "dao/UserDao.xml",
	configurationFilePlaceholder = "dao/placeholders.properties")
public class UserDao extends OntimizeJdbcDaoSupport {

    public static final String id = "user_";
    public static final String email = "email";
    public static final String password = "password";
    public static final String name = "name";
    public static final String surname = "surname";
    public static final String userblocked = "userblocked";
    public static final String lastpasswordupdate = "lastpasswordupdate";
    public static final String firstlogin = "firstlogin";
    public static final String id_country = "id_country";
    public static final String id_language = "id_language";
    public static final String company = "company";


}
