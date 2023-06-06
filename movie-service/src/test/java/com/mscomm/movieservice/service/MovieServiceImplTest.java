package com.mscomm.movieservice.service;

import static org.mockito.Mockito.times;
import static org.mockito.Mockito.verify;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;
import static org.mockito.Mockito.*;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.springframework.test.context.junit4.SpringRunner;

import com.mscomm.movieservice.entity.*;
import com.mscomm.movieservice.repository.*;
import com.mscomm.movieservice.service.impl.DepartmentServiceImpl;

@ExtendWith(MockitoExtension.class)
 class MovieServiceImplTest {
	@InjectMocks
    private DepartmentServiceImpl departmentService;
    
    @Mock
    private DepartmentRepository departmentRepository;
    @Test
     void testSaveDepartment() {
        // Arrange
        Movie department = new Movie();
        when(departmentRepository.save(any(Movie.class))).thenReturn(department);
        
        // Act
        Movie result = departmentService.saveDepartment(department);
        
        // Assert
        Assertions.assertNotNull(result);
        // Add more assertions as needed
    }

    @Test
     void testGetDepartmentById() {
        // Arrange
        Long departmentId = 1L;
        Movie department = new Movie();
        when(departmentRepository.findById(departmentId)).thenReturn(Optional.of(department));
        
        // Act
        Movie result = departmentService.getDepartmentById(departmentId);
        
        // Assert
       Assertions.assertNotNull(result);
        // Add more assertions as needed
    }

    @Test
     void testGetDepartmentBymovieName() {
        // Arrange
        String movieName = "Example";
        Movie department = new Movie();
        when(departmentRepository.findBymovieName(movieName)).thenReturn(department);
        
        // Act
        Movie result = departmentService.getDepartmentBymovieName(movieName);
        
        // Assert
        Assertions.assertNotNull(result);
        // Add more assertions as needed
    }

	
}
