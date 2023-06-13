package com.campusdual.springontimize.ws.core.rest;


import com.campusdual.springontimize.api.core.service.IUserProductService;
import com.ontimize.jee.server.rest.ORestController;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


@RestController
@RequestMapping("/userProduct")
public class UserProductRestController extends ORestController<IUserProductService> {

    @Autowired
    IUserProductService userProductService;

    @Override
    public IUserProductService getService() {
        return this.userProductService;
    }


}
