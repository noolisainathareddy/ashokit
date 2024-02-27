package com.training.ashokitAPI.dao;

import jakarta.persistence.Column;
import jakarta.persistence.Embeddable;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Embeddable
@Getter
@Setter
@ToString
public class UserId {

    @Column
    @NotNull(message = "Username should not be null")
    @Size(min=1,message = "Username shouldn't be empty")
    private String emailId;

}
