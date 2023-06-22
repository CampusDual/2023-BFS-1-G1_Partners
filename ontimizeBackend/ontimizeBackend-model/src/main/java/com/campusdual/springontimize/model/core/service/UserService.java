package com.campusdual.springontimize.model.core.service;


import java.util.*;

import com.campusdual.springontimize.model.core.dao.ProductDao;
import com.campusdual.springontimize.model.core.dao.UserProductDao;
import com.campusdual.springontimize.model.core.dao.UserRoleDao;
import com.ontimize.jee.common.gui.SearchValue;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Service;

import com.campusdual.springontimize.api.core.service.IUserService;
import com.campusdual.springontimize.model.core.dao.UserDao;
import com.ontimize.jee.common.dto.EntityResult;
import com.ontimize.jee.server.dao.DefaultOntimizeDaoHelper;


@Lazy
@Service("UserService")
public class UserService implements IUserService {

	@Autowired
	private UserProductDao userProductDao;

	@Autowired
	private UserDao userDao;

	@Autowired
	private UserRoleDao userRoleDao;

	@Autowired
	private DefaultOntimizeDaoHelper daoHelper;

	public void loginQuery(Map<?, ?> key, List<?> attr) {
		// TODO document why this method is empty
	}

	//Sample to permission
	//@Secured({ PermissionsProviderSecured.SECURED })
	public EntityResult userQuery(Map<?, ?> keyMap, List<?> attrList) {
		return this.daoHelper.query(userDao, keyMap, attrList);
	}



	public EntityResult partnerQuery(Map<?, ?> keyMap, List<?> attrList) {

		return this.daoHelper.query(userDao, keyMap, attrList, "partners");
	}

	@Override
	public EntityResult partnerAvailableQuery(Map<String, Object> keyMap, List<String> attrList) {
		List<String> users = null;
		if(keyMap.get(UserProductDao.ATTR_PRODUCT_ID)!=null){
			Map <String, Object> keys = new HashMap<>();
			List<String> attr = new ArrayList<>();
			attr.add(UserProductDao.ATTR_USER_ID);
			keys.put(UserProductDao.ATTR_PRODUCT_ID,keyMap.get(UserProductDao.ATTR_PRODUCT_ID));
			EntityResult partnersRelations = this.daoHelper.query(userProductDao,keys,attr);
			if(partnersRelations.isWrong()){
				return partnersRelations;
			}
			if(!partnersRelations.isEmpty()){
				users = new ArrayList<>();
				for(int i =0; i<partnersRelations.calculateRecordNumber();i++){
					users.add((String) partnersRelations.getRecordValues(i).get(UserProductDao.ATTR_USER_ID));
				}
			}
		}
		if(users!=null){
			keyMap.put(UserDao.id,new SearchValue(SearchValue.NOT_IN,users));
		}
		return this.daoHelper.query(userDao, keyMap, attrList, "partners");
	}



	public EntityResult userInsert(Map<?, ?> attrMap) {

		EntityResult insertUserResult = this.daoHelper.insert(userDao, attrMap);

		if(!insertUserResult.isWrong()){
			Map<String, Object> attrToInsert = new HashMap<>();
			attrToInsert.put(UserRoleDao.id_rolename,attrMap.get("rol"));
			attrToInsert.put(UserRoleDao.user_,attrMap.get("user_"));


		   EntityResult insertRol  = this.daoHelper.insert(userRoleDao,attrToInsert);

			if(!insertRol.isWrong()){

				String products = (String) attrMap.get("productList");

				if (products!=null && !products.trim().isEmpty()){

					String [] productList = products.split(",");

					for (String idProduct: productList){

						Map <String, Object> keys = new HashMap<>();
						keys.put("product_id",idProduct);
						keys.put("user_id",attrMap.get("user_"));
						this.daoHelper.insert(userProductDao,keys);

					}
				}
				return insertUserResult;

		   }else{
			   return insertRol;
		   }

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
