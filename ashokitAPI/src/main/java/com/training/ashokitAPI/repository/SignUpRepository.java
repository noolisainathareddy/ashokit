package com.training.ashokitAPI.repository;

import com.training.ashokitAPI.dao.NewUser;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

@EnableJpaRepositories
public interface SignUpRepository extends JpaRepository<NewUser, String> {
}
