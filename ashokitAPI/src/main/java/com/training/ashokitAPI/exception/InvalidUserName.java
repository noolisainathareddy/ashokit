package com.training.ashokitAPI.exception;

import lombok.Data;

@Data
public class InvalidUserName extends RuntimeException {
    private String errorMsg;
    private int statusCode;
    public InvalidUserName(String errorMsg, int  statusCode) {
        super(errorMsg);
        this.errorMsg = errorMsg;
        this.statusCode = statusCode;
    }
}
