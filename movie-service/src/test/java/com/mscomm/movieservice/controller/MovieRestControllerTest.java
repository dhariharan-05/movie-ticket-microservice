package com.mscomm.movieservice.controller;
import com.mscomm.movieservice.controller.DepartmentController;
import com.mscomm.movieservice.entity.Movie;
import com.mscomm.movieservice.service.DepartmentService;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.Mockito;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.ArgumentMatchers.*;
import static org.mockito.Mockito.mock;

public class MovieRestControllerTest {

    private DepartmentController departmentController;
    private DepartmentService departmentService;

    @BeforeEach
    public void setup() {
        departmentService = mock(DepartmentService.class);
        departmentController = new DepartmentController(departmentService);
    }

    @Test
    public void saveDepartment_ValidDepartment_ReturnsCreatedResponse() {
        // Arrange
        Movie department = new Movie();
        department.setMovieName("The Avengers");
        department.setMoviegenre("Action");
        department.setCbfcrating("UA");

        Movie savedDepartment = new Movie();
        savedDepartment.setId(1L);
        savedDepartment.setMovieName("The Avengers");
        savedDepartment.setMoviegenre("Action");
        savedDepartment.setCbfcrating("UA");

        Mockito.when(departmentService.saveDepartment(any(Movie.class))).thenReturn(savedDepartment);

        // Act
        ResponseEntity<Movie> response = departmentController.saveDepartment(department);

        // Assert
        assertEquals(HttpStatus.CREATED, response.getStatusCode());
        assertEquals(savedDepartment, response.getBody());
    }

    @Test
    public void getDepartmentById_ExistingId_ReturnsDepartment() {
        // Arrange
        Long departmentId = 1L;

        Movie department = new Movie();
        department.setId(departmentId);
        department.setMovieName("The Avengers");
        department.setMoviegenre("Action");
        department.setCbfcrating("UA");

        Mockito.when(departmentService.getDepartmentById(departmentId)).thenReturn(department);

        // Act
        ResponseEntity<Movie> response = departmentController.getDepartmentById(departmentId);

        // Assert
        assertEquals(HttpStatus.OK, response.getStatusCode());
        assertEquals(department, response.getBody());
    }

    @Test
    public void getDepartmentByMoviename_ExistingMovieName_ReturnsDepartment() {
        // Arrange
        String movieName = "The Avengers";

        Movie department = new Movie();
        department.setId(1L);
        department.setMovieName(movieName);
        department.setMoviegenre("Action");
        department.setCbfcrating("UA");

        Mockito.when(departmentService.getDepartmentBymovieName(movieName)).thenReturn(department);

        // Act
        ResponseEntity<Movie> response = departmentController.getDepartmentByMoviename(movieName);

        // Assert
        assertEquals(HttpStatus.OK, response.getStatusCode());
        assertEquals(department, response.getBody());
    }
}
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