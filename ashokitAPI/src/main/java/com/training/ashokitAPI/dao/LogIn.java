package com.training.ashokitAPI.dao;

import jakarta.validation.Valid;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

@Data
@NoArgsConstructor
@AllArgsConstructor
@ToString
public class LogIn {

    @Valid
    private UserId userId;

    @NotNull(message = "Password should not be null")
    @Size(min=1,message = "Password shouldn't be empty")
    private String password;
}
