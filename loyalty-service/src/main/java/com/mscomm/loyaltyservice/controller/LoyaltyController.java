package com.mscomm.loyaltyservice.controller;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.mscomm.loyaltyservice.entity.Loyalty;
import com.mscomm.loyaltyservice.service.LoyaltyService;
@RestController
@RequestMapping("api/loyalty")
public class LoyaltyController {
    private final LoyaltyService loyaltyService;

    public LoyaltyController(LoyaltyService loyaltyService) {
        this.loyaltyService = loyaltyService;
    }

    @GetMapping("/{userId}")
    public ResponseEntity<Loyalty> getUsersAndAddLoyalty(@PathVariable Long userId) {
        Loyalty loyalty = loyaltyService.getUsersAndAddLoyalty(userId);
        if (loyalty.getId() != null) {
            return ResponseEntity.ok(loyalty);
        } else {
            return ResponseEntity.noContent().build();
        }
    }
    
    @GetMapping("/{userId}/coins")
    public ResponseEntity<String> getUserCoins(@PathVariable Long userId) {
        String coins = loyaltyService.getUserCoins(userId);
     
            return ResponseEntity.ok(coins);
       
    }
    @PostMapping("/{userId}/updateCoins")
    public void updateCoins(@PathVariable Long userId) {
        loyaltyService.updateCoins(userId);
    }

@PostMapping("/{userId}/reduceCoins")
public void reduceCoins(@PathVariable Long userId) {
    loyaltyService.reduceCoins(userId);
}

    
}
