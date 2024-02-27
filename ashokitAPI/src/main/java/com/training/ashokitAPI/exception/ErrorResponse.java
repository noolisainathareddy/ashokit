package com.training.ashokitAPI.exception;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class ErrorResponse {
    private int statusCode;
    private String msg;

    public ErrorResponse(String msg){
        super();
        this.msg=msg;
    }
}
