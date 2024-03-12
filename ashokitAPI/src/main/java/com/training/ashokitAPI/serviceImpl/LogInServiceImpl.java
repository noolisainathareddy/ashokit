package com.training.ashokitAPI.serviceImpl;

import com.training.ashokitAPI.dao.LogIn;
import com.training.ashokitAPI.dao.NewUser;
import com.training.ashokitAPI.exception.IncorrectPassword;
import com.training.ashokitAPI.exception.InvalidUserName;
import com.training.ashokitAPI.repository.SignUpRepository;
import com.training.ashokitAPI.service.LogInService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class LogInServiceImpl implements LogInService {

    @Autowired
    private SignUpRepository signUpRepository;

    @Override
    public String loginUser(LogIn logIn) {
        System.out.println("Inside LoginService");
        NewUser user = signUpRepository.getRec(logIn.getUserId().getEmailId());
        System.out.println(user);
        if (user != null) {
            BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();
            if (encoder.matches(logIn.getPassword(), user.getPassword())) {
                return "Logged in Successfully";
            } else {
                throw new IncorrectPassword("Password is not matching", 403);
            }
        } else {
            throw new InvalidUserName("Please enter a valid user name", 403);
        }
    }
}
