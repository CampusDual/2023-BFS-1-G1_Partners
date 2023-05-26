package com.campusdual.ontimizeBackendPartners.api;


import com.campusdual.ontimizeBackendPartners.model.dto.ContactDTO;

import java.util.List;

public interface IContactService {

    //CRUD Operations
    ContactDTO queryContact(ContactDTO contactDTO);
    List<ContactDTO> queryAllContact();
    int insertContact(ContactDTO contactDTO);
    int updateContact(ContactDTO contactDTO);
    int deleteContact(ContactDTO contactDTO);
}
