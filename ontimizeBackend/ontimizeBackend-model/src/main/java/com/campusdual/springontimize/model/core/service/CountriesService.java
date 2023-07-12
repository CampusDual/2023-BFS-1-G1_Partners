package com.campusdual.springontimize.model.core.service;
import com.campusdual.springontimize.api.core.service.ICountriesService;
import com.campusdual.springontimize.model.core.dao.CountriesDao;
import com.ontimize.jee.common.dto.EntityResult;
import com.ontimize.jee.server.dao.DefaultOntimizeDaoHelper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Map;



@Lazy
@Service("CountriesService")
public class CountriesService implements ICountriesService {



	@Autowired
	private CountriesDao countriesDao;
	@Autowired
	private DefaultOntimizeDaoHelper daoHelper;


	//Consulta paises
	@Override
	public EntityResult countriesQuery(Map<String, Object> keyMap, List<String> attrList) {
		return daoHelper.query(countriesDao,keyMap,attrList);

	}

	//Inserta paises
	@Override
	public EntityResult countriesInsert(Map<String, Object> attrMap) {
		return this.daoHelper.insert(countriesDao, attrMap);
	}


}
