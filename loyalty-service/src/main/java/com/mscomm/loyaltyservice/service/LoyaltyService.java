package com.mscomm.loyaltyservice.service;

import com.mscomm.loyaltyservice.entity.Loyalty;
import com.mscomm.loyaltyservice.service.impl.*;
public interface LoyaltyService {
 Loyalty getUsersAndAddLoyalty(Long userId);
 String getUserCoins(Long userId);
 String updateCoins(Long userId);
 Loyalty reduceCoins(Long userId);
}
