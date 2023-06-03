package com.mscomm.loyaltyservice.repository;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.mscomm.loyaltyservice.entity.Loyalty;
public interface LoyaltyRepository extends JpaRepository<Loyalty, Long>{
    Loyalty findByUserNameAndUserEmail(String userName, String userEmail);
    Loyalty findByUserId(Long userId);

}
