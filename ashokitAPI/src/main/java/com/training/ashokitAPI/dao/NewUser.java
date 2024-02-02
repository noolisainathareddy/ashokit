package com.training.ashokitAPI.dao;


import jakarta.persistence.*;
import lombok.*;

@Entity
@AllArgsConstructor
@NoArgsConstructor
@ToString
@Getter
@Setter
public class NewUser {


    @EmbeddedId
    private UserId userId;

    @Column(name="username")
    private String userName;

    @Column(name="firstname")
    private String firstName;

    @Column(name="lastname")
    private String lastName;

    @Column(name="password")
    private String password;

    @Column(name="confirmpassword")
    private String confirmPassword;

}
