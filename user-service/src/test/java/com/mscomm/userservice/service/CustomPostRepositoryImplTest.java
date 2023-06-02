package com.mscomm.userservice.service;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.mock;
import static org.mockito.Mockito.when;

import jakarta.persistence.EntityManager;
import jakarta.persistence.LockModeType;
import jakarta.persistence.TypedQuery;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.Mockito;
import org.mockito.junit.MockitoJUnitRunner;
import org.mockito.Mock;
import com.mscomm.userservice.entity.User;
import com.mscomm.userservice.repository.CustomPostRepository;
import com.mscomm.userservice.service.impl.CustomPostRepositoryImpl;

public class CustomPostRepositoryImplTest {

    private CustomPostRepository customPostRepository;
    private EntityManager entityManager;

    @BeforeEach
    public void setup() {
        entityManager = mock(EntityManager.class);
        customPostRepository = new CustomPostRepositoryImpl(entityManager);
    }

    @Test
    public void testFindByIdAndLock() {
        // Create a dummy user
        User user = new User();
        user.setId(1L);
        user.setName("John Doe");
        user.setPassword("password");
        user.setEmail("john.doe@example.com");
        user.setSeat("A1");
        user.setDatetime("09:00");
        user.setPrice("120");
        user.setTheatreId("2");
        user.setMovieId("109");
        user.setRestatus("true");

        // Mock the EntityManager find method
        when(entityManager.find(User.class, 1L, LockModeType.PESSIMISTIC_WRITE)).thenReturn(user);

        // Call the method being tested
        User result = customPostRepository.findByIdAndLock(1L, LockModeType.PESSIMISTIC_WRITE);

        // Verify the EntityManager.find method was called with the correct arguments
        assertEquals(user, result);
    }
}