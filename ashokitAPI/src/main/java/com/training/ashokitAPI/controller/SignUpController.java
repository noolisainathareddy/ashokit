package com.training.ashokitAPI.controller;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.training.ashokitAPI.dao.NewUser;
import com.training.ashokitAPI.service.SignUp;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = {"http://localhost:3000"})
public class SignUpController {

    @Autowired
    private SignUp signUp;
    @PostMapping(value = "/addNewUser", consumes={"application/json"})
    public String SignUpRequest(@RequestBody NewUser newUser) {
        System.out.println(newUser);
        String result = signUp.addUser(newUser);

        return result;
    }
}
