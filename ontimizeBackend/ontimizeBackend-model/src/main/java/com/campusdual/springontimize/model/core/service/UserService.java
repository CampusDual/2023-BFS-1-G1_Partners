package com.campusdual.springontimize.model.core.service;


import java.sql.Timestamp;
import java.util.Calendar;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import com.campusdual.springontimize.model.core.dao.UserRoleDao;
import com.ontimize.jee.common.security.PermissionsProviderSecured;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Lazy;
import org.springframework.security.access.annotation.Secured;
import org.springframework.stereotype.Service;

import com.campusdual.springontimize.api.core.service.IUserService;
import com.campusdual.springontimize.model.core.dao.UserDao;
import com.ontimize.jee.common.dto.EntityResult;
import com.ontimize.jee.server.dao.DefaultOntimizeDaoHelper;


@Lazy
@Service("UserService")
public class UserService implements IUserService {

	@Autowired
	private UserDao userDao;

	@Autowired
	private UserRoleDao userRoleDao;

	@Autowired
	private DefaultOntimizeDaoHelper daoHelper;

	public void loginQuery(Map<?, ?> key, List<?> attr) {
	}

	//Sample to permission
	//@Secured({ PermissionsProviderSecured.SECURED })
	public EntityResult userQuery(Map<?, ?> keyMap, List<?> attrList) {
		return this.daoHelper.query(userDao, keyMap, attrList);
	}

	public EntityResult userInsert(Map<?, ?> attrMap) {

		EntityResult insertUserResult = this.daoHelper.insert(userDao, attrMap);

		if(!insertUserResult.isWrong()){
			Map<String, Object> attrToInsert = new HashMap<>();
			attrToInsert.put(UserRoleDao.id_rolename,attrMap.get("rol"));
			attrToInsert.put(UserRoleDao.user_,attrMap.get("user_"));

		    return this.daoHelper.insert(userRoleDao,attrToInsert);

		}else{
			return insertUserResult;
		}
	}

	public EntityResult userUpdate(Map<?, ?> attrMap, Map<?, ?> keyMap) {
		return this.daoHelper.update(userDao, attrMap, keyMap);
	}

	public EntityResult userDelete(Map<?, ?> keyMap) {
		return this.daoHelper.delete(this.userDao, keyMap);
	}

}
