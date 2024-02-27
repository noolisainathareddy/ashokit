package com.training.ashokitAPI.exception;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestControllerAdvice;

@ControllerAdvice
public class ClientExceptions {

    @ResponseStatus(code = HttpStatus.BAD_REQUEST)
    @ExceptionHandler(MethodArgumentNotValidException.class)
    public String exceptionHandler(MethodArgumentNotValidException ex)
    {
        return "Invalid fields";
    }


    @ExceptionHandler(IncorrectPassword.class)
    public ResponseEntity<Object> handlerIncorrectPassword(IncorrectPassword incorrectPassword){
        ErrorResponse errorResponse = new ErrorResponse();
        errorResponse.setMsg(incorrectPassword.getErrorMsg());
        errorResponse.setStatusCode(incorrectPassword.getStatusCode());
        return new ResponseEntity<>(errorResponse, HttpStatus.BAD_REQUEST);
    }

    @ExceptionHandler(InvalidUserName.class)
    public ResponseEntity<Object> handlerIncorrectUserName(InvalidUserName invalidUserName){
        ErrorResponse errorResponse = new ErrorResponse();
        errorResponse.setMsg(invalidUserName.getErrorMsg());
        errorResponse.setStatusCode(invalidUserName.getStatusCode());
        return new ResponseEntity<>(errorResponse, HttpStatus.BAD_REQUEST);
    }
}
