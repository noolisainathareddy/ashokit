package com.training.ashokitAPI.controller;

import com.training.ashokitAPI.dao.LogIn;
import com.training.ashokitAPI.exception.ErrorResponse;
import com.training.ashokitAPI.exception.IncorrectPassword;
import com.training.ashokitAPI.service.LogInService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins = {"http://localhost:3000"})
public class LogInController {
    @Autowired
    private LogInService logInService;


    @PostMapping("/login")
    public ResponseEntity<Object> logInUser(@Valid @RequestBody LogIn logIn) {
        try{
           String result = logInService.loginUser(logIn);
            return new ResponseEntity<>(result, HttpStatus.OK);
        }catch(Exception ex){
            return new ResponseEntity<>("No matching record found", HttpStatus.BAD_REQUEST);
        }

    }

}
