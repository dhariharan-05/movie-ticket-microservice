package com.mscomm.userservice.repository;
import org.springframework.data.jpa.repository.JpaRepository;
import com.mscomm.userservice.entity.*;
public interface UserRepository extends JpaRepository<User, Long>{
//  User findByName(String userName);
}
