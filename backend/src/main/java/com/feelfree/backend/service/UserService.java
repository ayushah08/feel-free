package com.feelfree.backend.service;

import com.feelfree.backend.entity.User;

import java.util.List;

public interface UserService {

    User registerUser(User user);

    List<User> getAllUsers();

    User getUserById(Long id);
}
