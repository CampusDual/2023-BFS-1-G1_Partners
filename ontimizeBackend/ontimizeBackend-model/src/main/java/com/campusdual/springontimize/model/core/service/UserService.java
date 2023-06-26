package com.campusdual.springontimize.model.core.service;


import java.util.*;

import com.campusdual.springontimize.model.core.dao.ProductDao;
import com.campusdual.springontimize.model.core.dao.UserProductDao;
import com.campusdual.springontimize.model.core.dao.UserRoleDao;
import com.ontimize.jee.common.dto.EntityResultMapImpl;
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
	public EntityResult userQuery(Map<String, Object> keyMap, List<String> attrList) {
		return this.daoHelper.query(userDao, keyMap, attrList);
	}



	public EntityResult partnerQuery(Map<String, Object> keyMap, List<String> attrList) {

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



	public EntityResult userInsert(Map<String, Object> attrMap) {

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

	public EntityResult userUpdate(Map<String, Object> attrMap, Map<String, Object> keyMap) {

		boolean haveRol = attrMap.get("rol") != null;

		EntityResult updateRol= new EntityResultMapImpl();

		if(haveRol && attrMap.size() > 1){
			 updateRol= this.daoHelper.update(userDao, attrMap, keyMap);
		}


		if(!updateRol.isWrong() && attrMap.get("rol") != null) {

			List<String> attrRol = Arrays.asList("id_user_role");
			Map<String ,Object> keyRol = new HashMap<>();
			keyRol.put("user_",keyMap.get("user_"));
			EntityResult rolQuery = this.daoHelper.query(userRoleDao,keyRol,attrRol);


			if(rolQuery.isWrong()){

				return rolQuery;
			}
			Integer id_user_role =(Integer) rolQuery.getRecordValues(0).get("id_user_role") ;

			Map<String,Object> updateAttrMap = new HashMap<>();
			updateAttrMap.put("id_rolename",attrMap.get("rol"));
			Map<String,Object> updateKeyMap = new HashMap<>();
			updateKeyMap.put("id_user_role",id_user_role);

			return this.daoHelper.update(userRoleDao,updateAttrMap,updateKeyMap);
		}

		return updateRol;
	}




	public EntityResult userDelete(Map<String, Object> keyMap) {
		return this.daoHelper.delete(this.userDao, keyMap);
	}


	public EntityResult partnerDelete(Map<String, Object> keyMap) {
		return this.daoHelper.delete(this.userDao, keyMap);
	}

}
