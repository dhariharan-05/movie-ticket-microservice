package com.mscomm.loyaltyservice.controller;
import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNull;
import static org.junit.jupiter.api.Assertions.assertSame;
import static org.mockito.Mockito.*;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import com.mscomm.loyaltyservice.entity.Loyalty;
import com.mscomm.loyaltyservice.service.LoyaltyService;
public class LoyaltyServiceControllerTest {
	  private LoyaltyService loyaltyService;
	    private LoyaltyController loyaltyController;

	    @BeforeEach
	    void setUp() {
	        loyaltyService = mock(LoyaltyService.class);
	        loyaltyController = new LoyaltyController(loyaltyService);
	    }

	    @Test
	    void testGetUsersAndAddLoyalty_ExistingLoyalty_ReturnsOk() {
	        // Arrange
	        Long userId = 1L;
	        Loyalty loyalty = new Loyalty();
	        loyalty.setId(1L);
	        when(loyaltyService.getUsersAndAddLoyalty(userId)).thenReturn(loyalty);

	        // Act
	        ResponseEntity<Loyalty> response = loyaltyController.getUsersAndAddLoyalty(userId);

	        // Assert
	        verify(loyaltyService).getUsersAndAddLoyalty(userId);
	        assertSame(loyalty, response.getBody());
	        assertEquals(HttpStatus.OK, response.getStatusCode());
	    }

	    @Test
	    void testGetUsersAndAddLoyalty_NonExistingLoyalty_ReturnsNoContent() {
	        // Arrange
	        Long userId = 1L;
	        when(loyaltyService.getUsersAndAddLoyalty(userId)).thenReturn(new Loyalty());

	        // Act
	        ResponseEntity<Loyalty> response = loyaltyController.getUsersAndAddLoyalty(userId);

	        // Assert
	        verify(loyaltyService).getUsersAndAddLoyalty(userId);
	        assertNull(response.getBody());
	        assertEquals(HttpStatus.NO_CONTENT, response.getStatusCode());
	    }

	    @Test
	    void testGetUserCoins_ReturnsOk() {
	        // Arrange
	        Long userId = 1L;
	        String coins = "100";
	        when(loyaltyService.getUserCoins(userId)).thenReturn(coins);

	        // Act
	        ResponseEntity<String> response = loyaltyController.getUserCoins(userId);

	        // Assert
	        verify(loyaltyService).getUserCoins(userId);
	        assertEquals(coins, response.getBody());
	        assertEquals(HttpStatus.OK, response.getStatusCode());
	    }
//
//	    @Test
//	    void testUpdateCoins() {
//	        // Arrange
//	        Long userId = 1L;
//
//	        // Act
//	        loyaltyController.updateCoins(userId);
//
//	        // Assert
//	        verify(loyaltyService).updateCoins(userId);
//	    }
//
//	    @Test
//	    void testReduceCoins() {
//	        // Arrange
//	        Long userId = 1L;
//
//	        // Act
//	        loyaltyController.reduceCoins(userId);
//
//	        // Assert
//	        verify(loyaltyService).reduceCoins(userId);
//	    }
	    @Test
	    void testUpdateCoins() {
	        // Arrange
	        Long userId = 1L;
	        String coins = "10";
	        when(loyaltyService.updateCoins(userId)).thenReturn(coins);

	        // Act
	        ResponseEntity<String> response = loyaltyController.updateCoins(userId);

	        // Assert
	        verify(loyaltyService).updateCoins(userId);
	        assertEquals(HttpStatus.OK, response.getStatusCode());
	        assertEquals(coins, response.getBody());
	    }

	    @Test
	    void testReduceCoins() {
	        // Arrange
	        Long userId = 1L;
	        Loyalty loyalty = new Loyalty();
	        loyalty.setCoins("8");
	        when(loyaltyService.reduceCoins(userId)).thenReturn(loyalty);

	        // Act
	        ResponseEntity<Loyalty> response = loyaltyController.reduceCoins(userId);

	        // Assert
	        verify(loyaltyService).reduceCoins(userId);
	        assertEquals(HttpStatus.OK, response.getStatusCode());
	        assertEquals(loyalty, response.getBody());
	    }
}
