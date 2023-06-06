package com.mscomm.userservice.service;

import com.mscomm.userservice.entity.User;
import com.mscomm.userservice.repository.UserRepository;
import com.mscomm.userservice.repository.CustomPostRepository;
import com.mscomm.userservice.service.UserService;
import com.mscomm.userservice.service.impl.CustomPostRepositoryImpl;
import com.mscomm.userservice.service.impl.UserServiceImpl;
import jakarta.persistence.LockModeType;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.springframework.http.ResponseEntity;
import org.springframework.web.client.RestTemplate;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;

class UserServiceImplLockTest {
    @Mock
    private UserRepository userRepository;

    @Mock
    private CustomPostRepositoryImpl customPostRepositoryImpl;

    @Mock
    private RestTemplate restTemplate;

    @InjectMocks
    private UserService userService = new UserServiceImpl(userRepository,restTemplate,customPostRepositoryImpl);

    @BeforeEach
    void setUp() {
        MockitoAnnotations.openMocks(this);
    }

    @Test
    void getUserByIdWithLockValidUserIdReturnsUser() {
        // Arrange
        Long userId = 1L;
        User expectedUser = new User();
        expectedUser.setId(userId);

        when(customPostRepositoryImpl.findByIdAndLock(userId, LockModeType.PESSIMISTIC_WRITE)).thenReturn(expectedUser);

        // Act
        User actualUser = userService.getUserByIdWithLock(userId);

        // Assert
        assertNotNull(actualUser);
        assertEquals(expectedUser.getId(), actualUser.getId());

        verify(customPostRepositoryImpl, times(1)).findByIdAndLock(userId, LockModeType.PESSIMISTIC_WRITE);
    }
}