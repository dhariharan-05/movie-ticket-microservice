//package com.mscomm.movieservice.controller;
//
//import static org.hamcrest.CoreMatchers.any;
//import static org.mockito.Mockito.times;
//import static org.mockito.Mockito.verify;
//import static org.mockito.Mockito.when;
//import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
//import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
//import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;
//
//import java.util.ArrayList;
//import java.util.List;
//
//import org.junit.jupiter.api.Assertions;
//import org.junit.jupiter.api.Test;
//import org.mockito.Mock;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
//import org.springframework.boot.test.mock.mockito.MockBean;
//import org.springframework.http.HttpStatus;
//import org.springframework.http.MediaType;
//import org.springframework.http.ResponseEntity;
//import org.springframework.test.context.junit4.SpringRunner;
//import org.springframework.test.web.servlet.MockMvc;
//import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
//import org.springframework.test.web.servlet.result.MockMvcResultMatchers;
//
//import com.fasterxml.jackson.core.JsonProcessingException;
//import com.fasterxml.jackson.databind.ObjectMapper;
//import com.mscomm.movieservice.entity.*;
//import com.mscomm.movieservice.service.*;
//
//
//public class MovieRestControllerTest {
//	 @Mock
//	    private DepartmentService departmentService;
//	 @Test
//	    public void testSaveDepartment() {
//	        // Arrange
//	        DepartmentController departmentController = new DepartmentController(departmentService);
//	        Movie department = new Movie();
//	        when(departmentService.saveDepartment(department)).thenReturn(department);
//
//	        // Act
//	        ResponseEntity<Movie> response = departmentController.saveDepartment(department);
//
//	        // Assert
//	        Assertions.assertEquals(HttpStatus.CREATED, response.getStatusCode());
//	        Assertions.assertEquals(department, response.getBody());
//	        verify(departmentService, times(1)).saveDepartment(department);
//	    }
//
//	    @Test
//	    public void testGetDepartmentById() {
//	        // Arrange
//	        DepartmentController departmentController = new DepartmentController(departmentService);
//	        Long departmentId = 1L;
//	        Movie department = new Movie();
//	        when(departmentService.getDepartmentById(departmentId)).thenReturn(department);
//
//	        // Act
//	        ResponseEntity<Movie> response = departmentController.getDepartmentById(departmentId);
//
//	        // Assert
//	        Assertions.assertEquals(HttpStatus.OK, response.getStatusCode());
//	        Assertions.assertEquals(department, response.getBody());
//	        verify(departmentService, times(1)).getDepartmentById(departmentId);
//	    }
//
//	    @Test
//	    public void testGetDepartmentByMovieName() {
//	        // Arrange
//	        DepartmentController departmentController = new DepartmentController(departmentService);
//	        String movieName = "Example";
//	        Movie department = new Movie();
//	        when(departmentService.getDepartmentBymovieName(movieName)).thenReturn(department);
//
//	        // Act
//	        ResponseEntity<Movie> response = departmentController.getDepartmentByMoviename(movieName);
//
//	        // Assert
//	        Assertions.assertEquals(HttpStatus.OK, response.getStatusCode());
//	        Assertions.assertEquals(department, response.getBody());
//	        verify(departmentService, times(1)).getDepartmentBymovieName(movieName);
//	    }
//	
//	
//}