package com.backend.controller;


import com.backend.api.IUserService;
import com.backend.model.dto.UserDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
@RestController()
@RequestMapping("/users")
public class UsersController {

    //controller
    @Autowired
    private IUserService userService;

    @GetMapping(value = "/testController")
    public String testUsersController() {
        return "Users controller works!";
    }

    @PostMapping(value = "/get")
    public UserDTO queryUser(@RequestBody UserDTO userDTO) {
        return userService.queryUser(userDTO);
    }

    @GetMapping(value = "/getAll")
    public List<UserDTO> queryAllUser() {
        return userService.queryAllUser();
    }

    @PostMapping(value = "/add")
    public int addUser(@RequestBody UserDTO userDTO) {
        return userService.insertUser(userDTO);
    }

    @PutMapping(value = "/update")
    public int updateUser(@RequestBody UserDTO userDTO) {
        return userService.updateUser(userDTO);
    }

    @DeleteMapping(value = "/delete")
    public int deleteUser(@RequestBody UserDTO userDTO) {
        return userService.deleteUser(userDTO);
    }
}
