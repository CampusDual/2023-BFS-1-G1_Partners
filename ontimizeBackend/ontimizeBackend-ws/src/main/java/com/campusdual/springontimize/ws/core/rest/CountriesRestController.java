package com.campusdual.springontimize.ws.core.rest;


import com.campusdual.springontimize.api.core.service.ICountriesService;
import com.ontimize.jee.server.rest.ORestController;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


@RestController
@RequestMapping("/countries")
public class CountriesRestController extends ORestController<ICountriesService> {

    @Autowired
    ICountriesService countriesService;

    @Override
    public ICountriesService getService() {
        return this.countriesService;
    }


}
