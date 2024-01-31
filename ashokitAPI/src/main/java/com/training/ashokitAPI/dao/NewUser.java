package com.training.ashokitAPI.dao;


import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;
import lombok.ToString;

@Entity
@AllArgsConstructor
@NoArgsConstructor
@ToString
public class NewUser {

    @Id
    private String emailId;

    @Column(name="firstname")
    private String firstName;

    @Column(name="lastname")
    private String lastName;

    @Column(name="username")
    private String userName;

    @Column(name="password")
    private String password;

    @Column(name="confirmpassword")
    private String confirmPassword;

}
