package com.mscomm.userservice.service;
import com.mscomm.userservice.dto.DepartmentDto;
import com.mscomm.userservice.dto.MovieDto;
import com.mscomm.userservice.dto.ResponseDto;
import com.mscomm.userservice.entity.User;
import com.mscomm.userservice.repository.UserRepository;
import com.mscomm.userservice.service.impl.UserServiceImpl;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.client.RestTemplate;

import java.util.ArrayList;
import java.util.List;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.*;

public class UserServiceImplTest {

    @Mock
    private UserRepository userRepository;

    @Mock
    private RestTemplate restTemplate;

    private UserServiceImpl userService;

    @BeforeEach
    public void setup() {
        MockitoAnnotations.openMocks(this);
        userService = new UserServiceImpl(userRepository, restTemplate, null);
    }

    @Test
    public void saveUser_ValidUser_ReturnsSavedUser() {
        // Arrange
        User user = new User();
        when(userRepository.save(user)).thenReturn(user);

        // Act
        User savedUser = userService.saveUser(user);

        // Assert
        assertEquals(user, savedUser);
        verify(userRepository, times(1)).save(user);
    }

    @Test
    public void getUser_ValidUserId_ReturnsResponseDto() {
        // Arrange
        Long userId = 1L;
        User user = new User();
        user.setId(userId);
        when(userRepository.findById(userId)).thenReturn(java.util.Optional.of(user));

        ResponseDto expectedResponseDto = new ResponseDto();
        // Set up expected responseDto

        ResponseEntity<DepartmentDto> departmentResponseEntity = new ResponseEntity<>(new DepartmentDto(), HttpStatus.OK);
        when(restTemplate.getForEntity(anyString(), eq(DepartmentDto.class))).thenReturn(departmentResponseEntity);

        ResponseEntity<MovieDto> movieResponseEntity = new ResponseEntity<>(new MovieDto(), HttpStatus.OK);
        when(restTemplate.getForEntity(anyString(), eq(MovieDto.class))).thenReturn(movieResponseEntity);

        // Act
        ResponseDto responseDto = userService.getUser(userId);

        // Assert
//        assertEquals(expectedResponseDto, responseDto);
//        verify(userRepository, times(2)).findById(userId);
//        verify(restTemplate, times(1)).getForEntity(anyString(), eq(DepartmentDto.class));
//        verify(restTemplate, times(1)).getForEntity(anyString(), eq(MovieDto.class));
    }

    @Test
    public void getUserById_ValidUserId_ReturnsUser() {
        // Arrange
        Long userId = 1L;
        User expectedUser = new User();
        when(userRepository.findById(userId)).thenReturn(java.util.Optional.of(expectedUser));

        // Act
        User user = userService.getUserById(userId);

        // Assert
        assertEquals(expectedUser, user);
        verify(userRepository, times(1)).findById(userId);
    }

//    @Test
//    public void getUserByIdWithLock_ValidUserId_ReturnsUser() {
//        // Arrange
//        Long userId = 1L;
//        User expectedUser = new User();
//        when(userRepository.findById(userId)).thenReturn(java.util.Optional.of(expectedUser));
//
//        // Act
//        User user = userService.getUserByIdWithLock(userId);
//
//        // Assert
//        assertEquals(expectedUser, user);
//        verify(userRepository, times(1)).findById(userId);
//    }

    @Test
    public void getByTheatreIdAndMovieId_ValidTheatreIdAndMovieId_ReturnsListOfUsers() {
        // Arrange
        String theatreId = "1";
        String movieId = "2";
        List<User> expectedUsers = new ArrayList<>();
        when(userRepository.findByTheatreIdAndMovieId(theatreId, movieId)).thenReturn(expectedUsers);

        // Act
        List<User> users = userService.getByTheatreIdAndMovieId(theatreId, movieId);

        // Assert
        assertEquals(expectedUsers, users);
        verify(userRepository, times(1)).findByTheatreIdAndMovieId(theatreId, movieId);
    }

    @Test
    public void getByTheatreIdAndMovieIdAndDatetime_ValidTheatreIdMovieIdAndDatetime_ReturnsListOfUsers() {
        // Arrange
        String theatreId = "1";
        String movieId = "2";
        String datetime = "2023-06-01";
        List<User> expectedUsers = new ArrayList<>();
        when(userRepository.findByTheatreIdAndMovieIdAndRestatusAndDatetime(theatreId, movieId, "true", datetime)).thenReturn(expectedUsers);

        // Act
        List<User> users = userService.getByTheatreIdAndMovieIdAndDatetime(theatreId, movieId, datetime);

        // Assert
        assertEquals(expectedUsers, users);
        verify(userRepository, times(1)).findByTheatreIdAndMovieIdAndRestatusAndDatetime(theatreId, movieId, "true", datetime);
    }
}