package com.training.ashokitAPI.serviceImpl;

import com.training.ashokitAPI.dao.NewUser;
import com.training.ashokitAPI.repository.SignUpRepository;
import com.training.ashokitAPI.service.SignUp;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class SignUpImpl implements SignUp {

    @Autowired
    private SignUpRepository signUpRepository;

    @Override
    public String addUser(NewUser newUser) {
        BCryptPasswordEncoder bCryptPasswordEncoder = new BCryptPasswordEncoder();
        newUser.setPassword(bCryptPasswordEncoder.encode(newUser.getPassword()));
        signUpRepository.save(newUser);
        return "Account created";
    }
}
