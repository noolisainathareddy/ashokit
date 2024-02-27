package com.training.ashokitAPI.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HealthCheck {

    @GetMapping("/healthCheck")
    public String adminPing() throws InterruptedException {
        return "App is up and running";
    }
}
