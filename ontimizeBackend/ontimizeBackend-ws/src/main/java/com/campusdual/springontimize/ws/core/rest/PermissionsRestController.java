package com.campusdual.springontimize.ws.core.rest;


import com.campusdual.springontimize.api.core.service.IPermissionsService;
import com.campusdual.springontimize.api.core.service.IUserService;
import com.ontimize.jee.common.dto.EntityResult;
import com.ontimize.jee.server.rest.ORestController;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;


@RestController
@RequestMapping("/permissions")
public class PermissionsRestController extends ORestController<IPermissionsService> {

	@Autowired
	private IPermissionsService permissionsService;

	@Override
	public IPermissionsService getService() {
		return this.permissionsService;
	}

	
}
