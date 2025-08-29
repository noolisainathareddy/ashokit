package com.training.ashokitAPI.controller;

import com.training.ashokitAPI.dao.LogIn;
import com.training.ashokitAPI.service.LogInService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = {"http://localhost:3000"})
public class LogInController {
    private LogInService logInService;

    @Autowired
    public LogInController(LogInService logInService) {
        this.logInService = logInService;
    }

    public LogInController() {
        System.out.println("Dummy statement");
    }

    @PostMapping("/login")
    public ResponseEntity<Object> logInUser(@Valid @RequestBody LogIn logIn) {
        try {
            String result = logInService.loginUser(logIn);
            return new ResponseEntity<>(result, HttpStatus.OK);
        } catch (Exception ex) {
            return new ResponseEntity<>("No matching record found", HttpStatus.BAD_REQUEST);
        }
    }
}
