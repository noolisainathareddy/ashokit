package com.training.ashokitAPI.repository;

import com.training.ashokitAPI.dao.NewUser;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.data.repository.query.Param;

@EnableJpaRepositories
public interface SignUpRepository extends JpaRepository<NewUser, String> {

    @Query(value = " select * from new_user u where u.email_id = :emailId ", nativeQuery = true)
    public NewUser getRec(@Param("emailId") String emailId);
}
