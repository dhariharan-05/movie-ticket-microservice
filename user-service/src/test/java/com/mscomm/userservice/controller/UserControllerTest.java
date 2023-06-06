package com.mscomm.userservice.controller;
import com.mscomm.userservice.controller.UserController;
import com.mscomm.userservice.dto.ResponseDto;
import com.mscomm.userservice.entity.User;
import com.mscomm.userservice.service.UserService;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import java.util.ArrayList;
import java.util.List;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertTrue;
import static org.mockito.Mockito.*;

public class UserControllerTest {

    @Mock
    private UserService userService;

    private UserController userController;

    @BeforeEach
    public void setup() {
        MockitoAnnotations.openMocks(this);
        userController = new UserController(userService);
    }

    @Test
    public void saveUserValidUserReturnsCreatedResponse() {
        // Arrange
        User user = new User();
        when(userService.saveUser(user)).thenReturn(user);

        // Act
        ResponseEntity<User> response = userController.saveUser(user);

        // Assert
        assertEquals(HttpStatus.CREATED, response.getStatusCode());
        assertEquals(user, response.getBody());
        verify(userService, times(1)).saveUser(user);
    }

    @Test
    public void getUserValidUserIdReturnsResponseDto() {
        // Arrange
        Long userId = 1L;
        ResponseDto expectedResponseDto = new ResponseDto();
        when(userService.getUser(userId)).thenReturn(expectedResponseDto);

        // Act
        ResponseEntity<ResponseDto> response = userController.getUser(userId);

        // Assert
        assertEquals(HttpStatus.OK, response.getStatusCode());
        assertEquals(expectedResponseDto, response.getBody());
        verify(userService, times(1)).getUser(userId);
    }

    @Test
    public void getUserByTheatreIdAndMovieIdValidTheatreIdAndMovieIdReturnsListOfUsers() {
        // Arrange
        String theatreId = "1";
        String movieId = "2";
        List<User> expectedUsers = new ArrayList<>();
        when(userService.getByTheatreIdAndMovieId(theatreId, movieId)).thenReturn(expectedUsers);

        // Act
        List<ResponseEntity<User>> response = userController.getUser(theatreId, movieId);

        // Assert
        assertEquals(expectedUsers.size(), response.size());
        for (ResponseEntity<User> entity : response) {
            assertEquals(HttpStatus.OK, entity.getStatusCode());
            assertTrue(expectedUsers.contains(entity.getBody()));
        }
        verify(userService, times(1)).getByTheatreIdAndMovieId(theatreId, movieId);
    }

    @Test
    public void getUserByDetailsValidTheatreIdMovieIdAndDatetimeReturnsListOfUsers() {
        // Arrange
        String theatreId = "1";
        String movieId = "2";
        String datetime = "2023-06-01";
        List<User> expectedUsers = new ArrayList<>();
        when(userService.getByTheatreIdAndMovieIdAndDatetime(theatreId, movieId, datetime)).thenReturn(expectedUsers);

        // Act
        List<ResponseEntity<User>> response = userController.getUserByDetails(theatreId, movieId, datetime);

        // Assert
        assertEquals(expectedUsers.size(), response.size());
        for (ResponseEntity<User> entity : response) {
            assertEquals(HttpStatus.OK, entity.getStatusCode());
            assertTrue(expectedUsers.contains(entity.getBody()));
        }
        verify(userService, times(1)).getByTheatreIdAndMovieIdAndDatetime(theatreId, movieId, datetime);
    }

    @Test
    public void updateUserValidUserIdAndUserReturnsUpdatedUser() {
        // Arrange
        Long userId = 1L;
        User updatedUser = new User();
        User existingUser = new User();
        when(userService.getUserByIdWithLock(userId)).thenReturn(existingUser);
        when(userService.saveUser(existingUser)).thenReturn(updatedUser);

        // Act
        ResponseEntity<User> response = userController.updateUser(userId, updatedUser);

        // Assert
        assertEquals(HttpStatus.OK, response.getStatusCode());
        assertEquals(updatedUser, response.getBody());
        verify(userService, times(1)).getUserByIdWithLock(userId);
        verify(userService, times(1)).saveUser(existingUser);
    }
}