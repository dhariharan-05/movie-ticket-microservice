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

 class MovieRestControllerTest {

    private DepartmentController departmentController;
    private DepartmentService departmentService;

    @BeforeEach
    public void setup() {
        departmentService = mock(DepartmentService.class);
        departmentController = new DepartmentController(departmentService);
    }

    @Test
     void saveDepartmentValidDepartmentReturnsCreatedResponse() {
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
     void getDepartmentByIdExistingIdReturnsDepartment() {
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
     void getDepartmentByMovienameExistingMovieNameReturnsDepartment() {
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
