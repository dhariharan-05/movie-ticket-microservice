package com.mscomm.loyaltyservice.service;
import static org.mockito.ArgumentMatchers.*;
import static org.mockito.Mockito.mock;
import static org.mockito.Mockito.never;
import static org.mockito.Mockito.times;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;
import static org.junit.jupiter.api.Assertions.assertEquals;

import static org.junit.jupiter.api.Assertions.assertNull;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.client.RestTemplate;

import com.mscomm.loyaltyservice.dto.ResponseDto;
import com.mscomm.loyaltyservice.dto.UserDto;
import com.mscomm.loyaltyservice.entity.Loyalty;
import com.mscomm.loyaltyservice.repository.LoyaltyRepository;
import com.mscomm.loyaltyservice.service.impl.LoyaltyServiceImpl;

public class LoyaltyServiceImplTest {
	 @Mock
	    private RestTemplate restTemplate;

	    @Mock
	    private LoyaltyRepository loyaltyRepository;

	    private LoyaltyServiceImpl loyaltyService;

	
		@BeforeEach
		void setUp() {
	        MockitoAnnotations.openMocks(this);
	        loyaltyRepository = mock(LoyaltyRepository.class);
	        loyaltyService = new LoyaltyServiceImpl(restTemplate, loyaltyRepository);

	    }
//		@Test
//		void getUsersAndAddLoyalty_ExistingLoyalty_ReturnsExistingLoyalty() {
//		    // Mock response from the user service
//		    ResponseDto responseDto = new ResponseDto();
//		    responseDto.setUser(new UserDto());
//		    responseDto.getUser().setId(1L);
//		    responseDto.getUser().setName("John");
//		    responseDto.getUser().setEmail("john@example.com");
//
//		    // Mock existing loyalty in the repository
//		    Loyalty existingLoyalty = new Loyalty();
//		    existingLoyalty.setId(1L);
//		    existingLoyalty.setUserName("John");
//		    existingLoyalty.setUserEmail("john@example.com");
//		    existingLoyalty.setCoins("10");
//		    existingLoyalty.setDiscountedvalue("50");
//
//		    when(restTemplate.getForEntity(anyString(), any())).thenReturn(new ResponseEntity<>(responseDto, HttpStatus.OK));
//		    when(loyaltyRepository.findByUserNameAndUserEmail(anyString(), anyString())).thenReturn(existingLoyalty);
//		    when(loyaltyRepository.save(any(Loyalty.class))).thenReturn(existingLoyalty);
//
//		    // Call the method
//		    Loyalty result = loyaltyService.getUsersAndAddLoyalty(1L);
//
//		    // Verify the interactions and assertions
//		    verify(restTemplate).getForEntity("http://localhost:8081/api/users/1", ResponseDto.class);
//		    verify(loyaltyRepository).findByUserNameAndUserEmail("John", "john@example.com");
//		    verify(loyaltyRepository, times(1)).save(any(Loyalty.class));
//
//		    assertEquals(existingLoyalty, result);
//		}
//		@Test
//		void getUsersAndAddLoyalty_NewLoyalty_ReturnsAddedLoyalty() {
//		    // Mock response from the user service
//		    ResponseDto responseDto = new ResponseDto();
//		    responseDto.setUser(new UserDto());
//		    responseDto.getUser().setId(2L);
//		    responseDto.getUser().setName("Jane");
//		    responseDto.getUser().setEmail("jane@example.com");
//
//		    // Mock existing loyalty in the repository as null
//		    Loyalty existingLoyalty = null;
//
//		    when(restTemplate.getForEntity(anyString(), any())).thenReturn(new ResponseEntity<>(responseDto, HttpStatus.OK));
//		    when(loyaltyRepository.findByUserNameAndUserEmail(anyString(), anyString())).thenReturn(existingLoyalty);
//
//		    // Mock the saved loyalty object
//		    Loyalty savedLoyalty = new Loyalty();
//		    savedLoyalty.setId(1L);
//		    savedLoyalty.setUserId(responseDto.getUser().getId());
//		    savedLoyalty.setUserName(responseDto.getUser().getName());
//		    savedLoyalty.setUserEmail(responseDto.getUser().getEmail());
//		    savedLoyalty.setCoins("0");
//		    savedLoyalty.setDiscountedvalue("0");
//		    when(loyaltyRepository.save(any(Loyalty.class))).thenReturn(savedLoyalty);
//
//		    // Call the method
//		    Loyalty result = loyaltyService.getUsersAndAddLoyalty(2L);
//
//		    // Verify the interactions and assertions
//		    verify(restTemplate).getForEntity("http://localhost:8081/api/users/2", ResponseDto.class);
//		    verify(loyaltyRepository).findByUserNameAndUserEmail("Jane", "jane@example.com");
//		    verify(loyaltyRepository).save(any(Loyalty.class));
//
//		    assertEquals(savedLoyalty, result);
//		}
		 @Test
		    void testGetUserCoins_ReturnsCoins() {
		        // Arrange
		        Long userId = 1L;
		        Loyalty loyalty = new Loyalty();
		        loyalty.setCoins("100");
		        when(loyaltyRepository.findByUserId(userId)).thenReturn(loyalty);

		        // Act
		        String result = loyaltyService.getUserCoins(userId);

		        // Assert
		        verify(loyaltyRepository).findByUserId(userId);
		        assertEquals(loyalty.getCoins(), result);
		    }

		    @Test
		    void testUpdateCoins_ExistingLoyalty_UpdatesCoins() {
		        // Arrange
		        Long userId = 1L;
		        Loyalty loyalty = new Loyalty();
		        loyalty.setCoins("5");
		        when(loyaltyRepository.findByUserId(userId)).thenReturn(loyalty);

		        // Act
		        loyaltyService.updateCoins(userId);

		        // Assert
		        verify(loyaltyRepository).findByUserId(userId);
		        verify(loyaltyRepository).save(loyalty);
		        assertEquals("6", loyalty.getCoins());
		        assertEquals("30", loyalty.getDiscountedvalue());
		    }

		    @Test
		    void testUpdateCoins_NonExistingLoyalty_DoesNotUpdate() {
		        // Arrange
		        Long userId = 1L;
		        when(loyaltyRepository.findByUserId(userId)).thenReturn(null);

		        // Act
		        Loyalty result = loyaltyService.reduceCoins(userId);

		        // Assert
		        verify(loyaltyRepository).findByUserId(userId);
		        verify(loyaltyRepository, never()).save(any(Loyalty.class));
		        assertNull(result);
		    }
		    @Test
		    void testReduceCoins_ExistingLoyalty_UpdatesCoins() {
		        // Arrange
		        Long userId = 1L;
		        Loyalty loyalty = new Loyalty();
		        loyalty.setCoins("5");
		        when(loyaltyRepository.findByUserId(userId)).thenReturn(loyalty);

		        // Act
		        loyaltyService.reduceCoins(userId);

		        // Assert
		        verify(loyaltyRepository).findByUserId(userId);
		        verify(loyaltyRepository).save(loyalty);
		        assertEquals("3", loyalty.getCoins());
		        assertEquals("15", loyalty.getDiscountedvalue());
		    }

		    @Test
		    void testReduceCoins_ExistingLoyalty_CoinsCannotBeNegative() {
		        // Arrange
		        Long userId = 1L;
		        Loyalty loyalty = new Loyalty();
		        loyalty.setCoins("1");
		        when(loyaltyRepository.findByUserId(userId)).thenReturn(loyalty);

		        // Act
		        loyaltyService.reduceCoins(userId);

		        // Assert
		        verify(loyaltyRepository).findByUserId(userId);
		        verify(loyaltyRepository).save(loyalty);
		        assertEquals("0", loyalty.getCoins());
		        assertEquals("0", loyalty.getDiscountedvalue());
		    }

		    @Test
		    void testReduceCoins_NonExistingLoyalty_DoesNotUpdate() {
		        // Arrange
		        Long userId = 1L;
		        when(loyaltyRepository.findByUserId(userId)).thenReturn(null);

		        // Act
		        loyaltyService.reduceCoins(userId);

		        // Assert
		        verify(loyaltyRepository).findByUserId(userId);
		        verify(loyaltyRepository, never()).save(any(Loyalty.class));
		    }



}
