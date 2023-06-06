package com.mscomm.userservice.service;
import com.mscomm.userservice.dto.DepartmentDto;
import com.mscomm.userservice.dto.MovieDto;
import com.mscomm.userservice.dto.ResponseDto;
import com.mscomm.userservice.dto.UserDto;
import com.mscomm.userservice.entity.User;
import com.mscomm.userservice.repository.UserRepository;
import com.mscomm.userservice.service.impl.UserServiceImpl;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.mockito.MockitoAnnotations;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.client.RestTemplate;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

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
    public void saveUserValidUserReturnsSavedUser() {
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
    public void getUserValidUserIdReturnsResponseDto() {

    	 Long userId = 1L;
         User user = new User();
         user.setId(userId);
         user.setTheatreId("123");
         user.setMovieId("456");

         // Mocking userRepository
         UserRepository userRepository = Mockito.mock(UserRepository.class);
         when(userRepository.findById(userId)).thenReturn(Optional.of(user));

         // Mocking restTemplate and its response entities
         ResponseEntity<DepartmentDto> departmentResponseEntity = new ResponseEntity<>(new DepartmentDto(), HttpStatus.OK);
         ResponseEntity<MovieDto> movieResponseEntity = new ResponseEntity<>(new MovieDto(), HttpStatus.OK);
         RestTemplate restTemplate = Mockito.mock(RestTemplate.class);
         when(restTemplate.getForEntity(eq("http://localhost:8082/api/theatres/123"), eq(DepartmentDto.class)))
                 .thenReturn(departmentResponseEntity);
         when(restTemplate.getForEntity(eq("http://localhost:8083/api/Movies/456"), eq(MovieDto.class)))
                 .thenReturn(movieResponseEntity);

         // Create an instance of UserServiceImpl and set the mocked dependencies
         UserServiceImpl userService = new UserServiceImpl(userRepository, restTemplate, null);


         // Set up the expected responseDto
         ResponseDto expectedResponseDto = new ResponseDto();
         // Set up expected responseDto with sample values
         UserDto expectedUserDto = new UserDto();
         // Set up expectedUserDto properties
         expectedUserDto.setId(userId);
         expectedResponseDto.setUser(expectedUserDto);
         expectedResponseDto.setDepartment(new DepartmentDto());
         expectedResponseDto.setMovie(new MovieDto());

         // Act
         ResponseDto responseDto = userService.getUser(userId);

     
         verify(userRepository, times(1)).findById(userId);
         verify(restTemplate, times(1)).getForEntity(eq("http://localhost:8082/api/theatres/123"), eq(DepartmentDto.class));
         verify(restTemplate, times(1)).getForEntity(eq("http://localhost:8083/api/Movies/456"), eq(MovieDto.class));
     }
    

    @Test
    public void getUserByIdValidUserIdReturnsUser() {
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
    


    @Test
    public void getByTheatreIdAndMovieIdValidTheatreIdAndMovieIdReturnsListOfUsers() {
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
    public void getByTheatreIdAndMovieIdAndDatetimeValidTheatreIdMovieIdAndDatetimeReturnsListOfUsers() {
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