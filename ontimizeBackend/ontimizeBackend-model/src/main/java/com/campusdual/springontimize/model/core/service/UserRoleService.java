package com.campusdual.springontimize.model.core.service;


import com.campusdual.springontimize.api.core.service.IUserRoleService;
import com.campusdual.springontimize.api.core.service.IUserService;
import com.campusdual.springontimize.model.core.dao.UserDao;
import com.campusdual.springontimize.model.core.dao.UserRoleDao;
import com.ontimize.jee.common.dto.EntityResult;
import com.ontimize.jee.common.security.PermissionsProviderSecured;
import com.ontimize.jee.server.dao.DefaultOntimizeDaoHelper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Lazy;
import org.springframework.security.access.annotation.Secured;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Map;


@Lazy
@Service("UserRoleService")
public class UserRoleService implements IUserRoleService {

	@Autowired
	private UserRoleDao userRoleDao;
	@Autowired
	private DefaultOntimizeDaoHelper daoHelper;
	@Override
	public EntityResult userroleQuery(Map<?, ?> keyMap, List<?> attrList) {
		return this.daoHelper.query(userRoleDao, keyMap, attrList);
	}

	@Override
	public EntityResult userroleInsert(Map<?, ?> attrMap) {
		return this.daoHelper.insert(userRoleDao, attrMap);
	}

	@Override
	public EntityResult userroleUpdate(Map<?, ?> attrMap, Map<?, ?> keyMap) {
		return this.daoHelper.update(userRoleDao, attrMap, keyMap);
	}

	@Override
	public EntityResult userroleDelete(Map<?, ?> keyMap) {
		return this.daoHelper.delete(this.userRoleDao, keyMap);
	}
}
