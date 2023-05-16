package com.backend.model.dto.dtomapper;

import com.backend.model.User;
import com.backend.model.dto.UserDTO;
import org.mapstruct.Mapper;
import org.mapstruct.factory.Mappers;

import java.util.List;

@Mapper
public interface UserMapper {

    UserMapper INSTANCE = Mappers.getMapper(UserMapper.class);

    UserDTO toDTO(User user);
    List<UserDTO> toDTOList(List<User> users);
    User toEntity(UserDTO userdto);
}
