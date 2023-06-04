package com.mscomm.loyaltyservice.service.impl;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import com.mscomm.loyaltyservice.service.*;
//import com.mscomm.userservice.dto.DepartmentDto;
import com.mscomm.loyaltyservice.dto.ResponseDto;
import com.mscomm.loyaltyservice.entity.Loyalty;
import com.mscomm.loyaltyservice.repository.LoyaltyRepository;

import lombok.AllArgsConstructor;
@Service
@AllArgsConstructor
public class LoyaltyServiceImpl implements LoyaltyService {
    private RestTemplate restTemplate;
	 private LoyaltyRepository loyaltyRepository;


@Override
public Loyalty getUsersAndAddLoyalty(Long userId) {
	
	 ResponseEntity<ResponseDto> responseEntity = restTemplate
             .getForEntity("http://localhost:8081/api/users/" + userId,
//             .getForEntity("http://localhost:8082/api/theatres/" + user.getTheatreId(),

     		ResponseDto.class);
     ResponseDto responseDto = responseEntity.getBody();
     Loyalty existingLoyalty = loyaltyRepository.findByUserNameAndUserEmail(
    	        responseDto.getUser().getName(),
    	        responseDto.getUser().getEmail()
    	    );

    	    if (existingLoyalty != null) {
                String coins = existingLoyalty.getCoins();
                String discountedValue = calculateDiscountedValue(coins);
                Loyalty updatedLoyalty = new Loyalty();
                updatedLoyalty.setId(existingLoyalty.getId());
                updatedLoyalty.setUserId(responseDto.getUser().getId());
    	        updatedLoyalty.setUserName(responseDto.getUser().getName());
    	        updatedLoyalty.setUserEmail(responseDto.getUser().getEmail());
    	        updatedLoyalty.setCoins(coins); // Set initial coins value
    	        updatedLoyalty.setDiscountedvalue(discountedValue);
    	        Loyalty putLoyalty = loyaltyRepository.save(updatedLoyalty);
                
    	        // User details already exist in loyalty entity, return empty loyalty object
    	        return putLoyalty;
    	    } else {
    	        // User details not found in loyalty entity, create and save a new loyalty object
    	        Loyalty newLoyalty = new Loyalty();
    	        newLoyalty.setUserId(responseDto.getUser().getId());
    	        newLoyalty.setUserName(responseDto.getUser().getName());
    	        newLoyalty.setUserEmail(responseDto.getUser().getEmail());
    	        newLoyalty.setCoins("0"); // Set initial coins value
    	        newLoyalty.setDiscountedvalue("0");
    	        
    	        // Save the new loyalty object in the database
    	        Loyalty addedLoyalty = loyaltyRepository.save(newLoyalty);
    	        
    	        return addedLoyalty;
    	    }

}
@Override
public  String getUserCoins(Long userId) {
	 Loyalty loyalty = loyaltyRepository.findByUserId(userId);
	 
	        return loyalty.getCoins();

	    
	}
@Override
public String updateCoins(Long userId) {
    Loyalty loyalty = loyaltyRepository.findByUserId(userId);
    if (loyalty != null) {
        // Increment the coin count by 1
        int currentCoins = Integer.parseInt(loyalty.getCoins());
        int updatedCoins = currentCoins + 1;
        loyalty.setCoins(String.valueOf(updatedCoins));

        // Calculate the discounted value
        String discountedValue = calculateDiscountedValue(loyalty.getCoins());
        loyalty.setDiscountedvalue(discountedValue);

        // Save the updated loyalty object in the database
        loyaltyRepository.save(loyalty);
        
    }
    return loyalty.getCoins();
}

@Override
public Loyalty reduceCoins(Long userId) {
    Loyalty loyalty = loyaltyRepository.findByUserId(userId);
    if (loyalty != null) {
        // Increment the coin count by 1
        int currentCoins = Integer.parseInt(loyalty.getCoins());
        int updatedCoins = currentCoins - 2;
        if(updatedCoins < 0) {
        	updatedCoins = 0;
        	 loyalty.setCoins(String.valueOf(updatedCoins));
        }
        else {
        loyalty.setCoins(String.valueOf(updatedCoins));
        }
        // Calculate the discounted value
        String discountedValue = calculateDiscountedValue(loyalty.getCoins());
        loyalty.setDiscountedvalue(discountedValue);

        // Save the updated loyalty object in the database
        loyaltyRepository.save(loyalty);
    }
    return loyalty;
}
private String calculateDiscountedValue(String coins) {
    // Perform the calculation to get the discounted value
    int coinsValue = Integer.parseInt(coins);
    int discountedValue = coinsValue * 5;
    
    return String.valueOf(discountedValue);
}
}





