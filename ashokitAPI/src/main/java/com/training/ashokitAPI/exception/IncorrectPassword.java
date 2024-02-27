package com.training.ashokitAPI.exception;


import lombok.Data;

@Data
public class IncorrectPassword extends RuntimeException {

    private String errorMsg;
    private int statusCode;

    public IncorrectPassword() {
    }

    public IncorrectPassword(String errorMsg, int statusCode) {
        super(errorMsg);
        this.errorMsg = errorMsg;
        this.statusCode = statusCode;
    }
}
