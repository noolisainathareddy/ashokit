package com.training.ashokitAPI.controller;

import com.training.ashokitAPI.dao.LogIn;
import com.training.ashokitAPI.exception.ErrorResponse;
import com.training.ashokitAPI.exception.IncorrectPassword;
import com.training.ashokitAPI.service.LogInService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins = {"http://localhost:3000"})
public class LogInController {
    @Autowired
    private LogInService logInService;


    @PostMapping("/login")
    public String logInUser(@Valid @RequestBody LogIn logIn) {
       return logInService.loginUser(logIn);
    }

//    @ExceptionHandler(value =IncorrectPassword.class)
//    @ResponseStatus(HttpStatus.CONFLICT)
//    public ErrorResponse handleInvalidPasswordException(IncorrectPassword ex){
//        return new ErrorResponse(HttpStatus.CONFLICT.value(),ex.getMessage());
//    }
}
