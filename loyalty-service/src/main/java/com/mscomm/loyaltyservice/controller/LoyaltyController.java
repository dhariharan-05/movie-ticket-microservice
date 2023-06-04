package com.mscomm.loyaltyservice.controller;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.mscomm.loyaltyservice.entity.Loyalty;
import com.mscomm.loyaltyservice.service.LoyaltyService;


import lombok.AllArgsConstructor;
@RestController
@RequestMapping("api/loyalty")
@AllArgsConstructor
@CrossOrigin(origins="*")
public class LoyaltyController {
    private final LoyaltyService loyaltyService;


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
    @GetMapping("/{userId}/updateCoins")
    public ResponseEntity<String> updateCoins(@PathVariable Long userId) {
        String coins = loyaltyService.updateCoins(userId);
        
        return ResponseEntity.ok(coins);
    }

@GetMapping("/{userId}/reduceCoins")
public ResponseEntity<Loyalty> reduceCoins(@PathVariable Long userId) {
    Loyalty loyalty = loyaltyService.reduceCoins(userId);
    return ResponseEntity.ok(loyalty);
}

    
}
