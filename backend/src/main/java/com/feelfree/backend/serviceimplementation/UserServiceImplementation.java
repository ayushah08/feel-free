package com.feelfree.backend.serviceimplementation;

import com.feelfree.backend.entity.User;
import com.feelfree.backend.repository.UserRepository;
import com.feelfree.backend.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class UserServiceImplementation implements UserService {

    @Autowired
   private UserRepository userRepository;
    
    @Override
    public User registerUser(User user) {
        return userRepository.save(user);
    }

    @Override
    public List<User> getAllUsers() {
        return userRepository.findAll();
    }

    @Override
    public User getUserById(Long id) {
        return userRepository.findById(id).orElse(()->{throw new RuntimeException("User Not Found with id : " +id)});
    }
}
