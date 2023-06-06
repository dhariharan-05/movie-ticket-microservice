package com.mscomm.theatreservice.controller;
import com.mscomm.theatreservice.controller.TheatreController;
import com.mscomm.theatreservice.entity.Theatre;
import com.mscomm.theatreservice.service.TheatreService;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.Mockito;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.ArgumentMatchers.*;
import static org.mockito.Mockito.mock;

public class TheatreControllerTest {

    private TheatreController departmentController;
    private TheatreService departmentService;

    @BeforeEach
    public void setup() {
        departmentService = mock(TheatreService.class);
        departmentController = new TheatreController(departmentService);
    }

    @Test
    public void saveDepartmentValidDepartmentReturnsCreatedResponse() {
        // Arrange
        Theatre department = new Theatre();
        department.setTheatreName("Ajanta Theatre");
        department.setTheatreAddress("Pondy");
        department.setTheatreSeats("250");

        Theatre savedDepartment = new Theatre();
        savedDepartment.setId(1L);
        savedDepartment.setTheatreName("Ajanta Theatre");
        savedDepartment.setTheatreAddress("Pondy");
        savedDepartment.setTheatreSeats("250");

        Mockito.when(departmentService.saveDepartment(any(Theatre.class))).thenReturn(savedDepartment);

        // Act
        ResponseEntity<Theatre> response = departmentController.saveDepartment(department);

        // Assert
        assertEquals(HttpStatus.CREATED, response.getStatusCode());
        assertEquals(savedDepartment, response.getBody());
    }

    @Test
    public void getDepartmentByIdExistingIdReturnsDepartment() {
        // Arrange
        Long departmentId = 1L;

        Theatre department = new Theatre();
        department.setId(departmentId);
        department.setTheatreName("Ajanta Theatre");
        department.setTheatreAddress("Pondy");
        department.setTheatreSeats("250");

        Mockito.when(departmentService.getDepartmentById(departmentId)).thenReturn(department);

        // Act
        ResponseEntity<Theatre> response = departmentController.getDepartmentById(departmentId);

        // Assert
        assertEquals(HttpStatus.OK, response.getStatusCode());
        assertEquals(department, response.getBody());
    }

    @Test
    public void getDepartmentBytheatreNameExistingTheatreNameReturnsDepartment() {
        // Arrange
        String theatreName = "Ajanta Theatre";

        Theatre department = new Theatre();
        department.setId(1L);
        department.setTheatreName(theatreName);
        department.setTheatreAddress("Pondy");
        department.setTheatreSeats("250");

        Mockito.when(departmentService.getDepartmentBytheatreName(theatreName)).thenReturn(department);

        // Act
        ResponseEntity<Theatre> response = departmentController.getDepartmentBytheatreName(theatreName);

        // Assert
        assertEquals(HttpStatus.OK, response.getStatusCode());
        assertEquals(department, response.getBody());
    }
}
