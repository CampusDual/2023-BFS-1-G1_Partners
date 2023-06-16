package com.campusdual.springontimize.ws.core.rest;


import com.campusdual.springontimize.api.core.service.IResourceService;

import com.ontimize.jee.server.rest.ORestController;
import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


@RestController
@RequestMapping("/resources")
public class ResourceRestController extends ORestController<IResourceService> {

	@Autowired
	private IResourceService resSrv;

	@Override
	public IResourceService getService() {
		return this.resSrv;
	}


}
