package com.backend.model.dto.dtomapper;

import com.backend.model.Contact;
import com.backend.model.dto.ContactDTO;
import java.util.ArrayList;
import java.util.List;
import javax.annotation.processing.Generated;

@Generated(
    value = "org.mapstruct.ap.MappingProcessor",
    date = "2023-05-15T09:59:06+0200",
    comments = "version: 1.5.3.Final, compiler: javac, environment: Java 17.0.1 (Oracle Corporation)"
)
public class ContactMapperImpl implements ContactMapper {

    @Override
    public ContactDTO toDTO(Contact contact) {
        if ( contact == null ) {
            return null;
        }

        ContactDTO contactDTO = new ContactDTO();

        contactDTO.setId( contact.getId() );
        contactDTO.setName( contact.getName() );
        contactDTO.setSurname1( contact.getSurname1() );
        contactDTO.setSurname2( contact.getSurname2() );
        contactDTO.setPhone( contact.getPhone() );
        contactDTO.setEmail( contact.getEmail() );

        return contactDTO;
    }

    @Override
    public List<ContactDTO> toDTOList(List<Contact> contacts) {
        if ( contacts == null ) {
            return null;
        }

        List<ContactDTO> list = new ArrayList<ContactDTO>( contacts.size() );
        for ( Contact contact : contacts ) {
            list.add( toDTO( contact ) );
        }

        return list;
    }

    @Override
    public Contact toEntity(ContactDTO contactdto) {
        if ( contactdto == null ) {
            return null;
        }

        Contact contact = new Contact();

        contact.setId( contactdto.getId() );
        contact.setName( contactdto.getName() );
        contact.setSurname1( contactdto.getSurname1() );
        contact.setSurname2( contactdto.getSurname2() );
        contact.setPhone( contactdto.getPhone() );
        contact.setEmail( contactdto.getEmail() );

        return contact;
    }
}
