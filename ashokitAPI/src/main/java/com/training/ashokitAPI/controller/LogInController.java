package com.training.ashokitAPI.controller;

import com.training.ashokitAPI.dao.LogIn;
import com.training.ashokitAPI.dao.NewUser;
import com.training.ashokitAPI.service.LogInService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = {"http://localhost:3000"})
public class LogInController {

    @Autowired
    private LogInService logInService;

    @PostMapping("/login")
    public String logInUser(@RequestBody LogIn logIn){
        System.out.println(logIn);
       return logInService.loginUser(logIn);
    }
}
