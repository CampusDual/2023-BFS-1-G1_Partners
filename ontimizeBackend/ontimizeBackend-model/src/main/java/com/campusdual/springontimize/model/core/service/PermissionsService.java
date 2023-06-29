package com.campusdual.springontimize.model.core.service;

import com.campusdual.springontimize.api.core.service.IPermissionsService;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.ontimize.jee.common.dto.EntityResult;
import com.ontimize.jee.common.dto.EntityResultMapImpl;
import com.ontimize.jee.common.exceptions.OntimizeJEERuntimeException;
import org.springframework.context.annotation.Lazy;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service("PermissionsService")
@Lazy
public class PermissionsService implements IPermissionsService {


    @Override
    public EntityResult permissionQuery(Map<String, Object> keyMap, List<String> attrList)
            throws OntimizeJEERuntimeException {
        ObjectMapper mapper = new ObjectMapper();
        String permissionJson = null;
        Map<String,Object> permisionMap = getPermissions();
        try {
            permissionJson = mapper.writeValueAsString(permisionMap);
        } catch (JsonProcessingException e) {
            throw new RuntimeException(e);
        }
        EntityResult result = new EntityResultMapImpl();
        Map<String,Object> permissions = new HashMap<>();
        permissions.put("permission",permissionJson);
        result.addRecord(permissions);
        return(result);
    }

    private Map<String, Object> getPermissions() {
        HashMap<String,Object> result = new HashMap<>();
        addMenuForRole(result);
        addRoutesForRole(result);
        return result;
    }

    private void addRoutesForRole(HashMap<String, Object> result) {
        List<HashMap<String,Object>> routeItems = new ArrayList<>();
        routeItems.add(generateRouteItem("home",isAdmin()));
        result.put("routes",routeItems);
    }

    private void addMenuForRole(HashMap<String, Object> result) {
        List<HashMap<String,Object>> menuItems = new ArrayList<>();
        menuItems.add(generateMenuItem("users",isAdmin(),isAdmin()));
        menuItems.add(generateMenuItem("home",isAdmin(),isAdmin()));
        menuItems.add(generateMenuItem("personal-area",!isAdmin(),!isAdmin()));
        menuItems.add(generateMenuItem("product-home",true,true));
        result.put("menu",menuItems);
    }

    private HashMap<String, Object> generateMenuItem(String attr, boolean visible, boolean enabled) {
        HashMap<String, Object> result = new HashMap<>();
        result.put("attr",attr);
        result.put("visible",visible);
        result.put("enabled",enabled);
        return result;
    }

    private HashMap<String, Object> generateRouteItem(String permissionId, boolean enabled) {
        HashMap<String, Object> result = new HashMap<>();
        result.put("permissionId",permissionId);
        result.put("enabled",enabled);
        return result;
    }

    private boolean isAdmin(){
        Authentication auth = SecurityContextHolder.getContext().getAuthentication();
        String role = auth.getAuthorities().toArray()[0].toString();
        return "admin".equalsIgnoreCase(role);
    }


}