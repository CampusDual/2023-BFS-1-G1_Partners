package com.campusdual.ontimizeBackendPartners.model.dao;


import com.campusdual.ontimizeBackendPartners.model.Contact;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ContactDao extends JpaRepository<Contact, Integer> {
}
