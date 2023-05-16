package com.backend.service;

import com.backend.api.IUserService;
import com.backend.model.User;
import com.backend.model.dao.UserDao;
import com.backend.model.dto.UserDTO;
import com.backend.model.dto.dtomapper.UserMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Service;

import java.util.List;

@Service("UserService")
@Lazy
public class UserService implements IUserService {

    @Autowired
    private UserDao userDao;

    @Override
    public UserDTO queryUser(UserDTO userDTO) {
        User user = UserMapper.INSTANCE.toEntity(userDTO);
        return UserMapper.INSTANCE.toDTO(userDao.getReferenceById(user.getId()));
    }

    @Override
    public List<UserDTO> queryAllUser() {
        return UserMapper.INSTANCE.toDTOList(userDao.findAll());
    }

    @Override
    public int insertUser(UserDTO userDTO) {
        User user = UserMapper.INSTANCE.toEntity(userDTO);
        userDao.saveAndFlush(user);
        return user.getId();
    }

    @Override
    public int updateUser(UserDTO userDTO) {
        // The save() method of JPARepository performs both insertion and update. Insert if no primary key is provided, update otherwise. For this reason, the method #insertUser() is called
        return insertUser(userDTO);
    }

    @Override
    public int deleteUser(UserDTO userDTO) {
        int id = userDTO.getId();
        User user = UserMapper.INSTANCE.toEntity(userDTO);
        userDao.delete(user);
        return id;
    }
}
