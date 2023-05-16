package com.backend.api;


import com.backend.model.dto.UserDTO;

import java.util.List;

public interface IUserService {

    //CRUD Operations

    UserDTO queryUser(UserDTO userDTO);
    List<UserDTO> queryAllUser();
    int insertUser(UserDTO userDTO);
    int updateUser(UserDTO userDTO);
    int deleteUser(UserDTO userDTO);
}
