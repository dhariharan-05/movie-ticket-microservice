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
    public void saveDepartment_ValidDepartment_ReturnsCreatedResponse() {
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
    public void getDepartmentById_ExistingId_ReturnsDepartment() {
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
    public void getDepartmentBytheatreName_ExistingTheatreName_ReturnsDepartment() {
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
//package com.mscomm.departmentservice.controller;
//
//import static org.mockito.Mockito.when;
//
//import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
//import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
//import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;
//
//import java.util.ArrayList;
//import java.util.List;
//
//import org.junit.jupiter.api.Test;
//import org.junit.RunWith;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
//import org.springframework.boot.test.mock.mockito.MockBean;
//import org.springframework.http.MediaType;
//import org.springframework.test.context.junit4.SpringRunner;
//import org.springframework.test.web.servlet.MockMvc;
//import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
//import org.springframework.test.web.servlet.result.MockMvcResultMatchers;
//
//import com.fasterxml.jackson.core.JsonProcessingException;
//import com.fasterxml.jackson.databind.ObjectMapper;
//import com.mscomm.departmentservice.entity.Theatre;
//import com.mscomm.departmentservice.service.DepartmentService;
//
//@RunWith(SpringRunner.class)
//@WebMvcTest(DepartmentController.class)
//public class DepartmentControllerTest {
//
//	@Autowired
//	private MockMvc mvc;
//
//	
//	@MockBean
//	private DepartmentService departmentService;
//
//	
//	@Test
//	public void getTheatreBytheatreName() throws Exception {
//
//		
//		Theatre theatre = new Theatre();
//		theatre.setTheatreName("ajanta");
//		theatre.setId((long)4);
//		theatre.setTheatreAddress("pondy");
//		theatre.setTheatreSeats("3");
//		
//		
//		
//		when(departmentService.getDepartmentBytheatreName("ajanta")).thenReturn(theatre);
//
//		mvc.perform(get("/api/appointment/kavya").contentType(MediaType.APPLICATION_JSON)).andExpect(status().isOk())
//				.andExpect(jsonPath("$.theatrename").value("ajanta"));
//
//	}
//
//	@Test
//	public void saveUser() throws Exception {
//
//		Theatre theatre = new Theatre();
//		theatre.setTheatreName("ajanta");
//		theatre.setId((long)4);
//		theatre.setTheatreAddress("py");
//		theatre.setTheatreSeats("3");
//		
//		
//
//		when(departmentService.saveDepartment(theatre)).thenReturn(theatre);
//
//		mvc.perform(MockMvcRequestBuilders.post("/api/theatre").content(asJsonString(theatre))
//				.contentType(MediaType.APPLICATION_JSON).accept(MediaType.APPLICATION_JSON)).andExpect(status().isOk());
//	}
//
//	@Test
//	public void getAllTheatres() throws Exception {
//
//		Theatre theatre = new Theatre();
//		theatre.setTheatreName("ajanta");
//		theatre.setId((long)4);
//		theatre.setTheatreAddress("pondy");
//		theatre.setTheatreSeats("3");
//		
//		
//		Theatre theatre1 = new Theatre();
//		theatre1.setTheatreName("ajanta");
//		theatre1.setId((long)4);
//		theatre1.setTheatreAddress("pondicherry");
//		theatre1.setTheatreSeats("3");
//		
//		
//		List<Theatre> theatres = new ArrayList<Theatre>();
//		theatres.add(theatre1);
//		theatres.add(theatre);
//
//		when(departmentService.getAllTheatres()).thenReturn(theatres);
//
//		mvc.perform(get("/api/theatre").contentType(MediaType.APPLICATION_JSON)).andExpect(status().isOk())
//				.andExpect(MockMvcResultMatchers.jsonPath("$.length()").value(2));
//		
//	}
//
//	public static String asJsonString(final Object obj) throws JsonProcessingException {
//
//		return new ObjectMapper().writeValueAsString(obj);
//
//	}
//}