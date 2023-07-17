package com.campusdual.springontimize.ws.core.rest;


import com.campusdual.springontimize.api.core.service.ILanguagesService;
import com.ontimize.jee.server.rest.ORestController;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


@RestController
@RequestMapping("/languages")
public class LanguagesRestController extends ORestController<ILanguagesService> {

    @Autowired
    ILanguagesService languagesService;

    @Override
    public ILanguagesService getService() {
        return this.languagesService;
    }


}



