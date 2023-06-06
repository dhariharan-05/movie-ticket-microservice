package com.mscomm.theatreservice.service;
import com.mscomm.theatreservice.entity.Theatre;
import com.mscomm.theatreservice.repository.TheatreRepository;
import com.mscomm.theatreservice.service.impl.TheatreServiceImpl;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.Mockito;

import java.util.Optional;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.mock;
import static org.mockito.Mockito.when;

public class TheatreServiceImplTest {

    private TheatreServiceImpl departmentService;
    private TheatreRepository departmentRepository;

    @BeforeEach
    public void setup() {
        departmentRepository = mock(TheatreRepository.class);
        departmentService = new TheatreServiceImpl(departmentRepository);
    }

    @Test
    public void saveDepartmentValidDepartmentReturnsSavedDepartment() {
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

        when(departmentRepository.save(department)).thenReturn(savedDepartment);

        // Act
        Theatre result = departmentService.saveDepartment(department);

        // Assert
        assertEquals(savedDepartment, result);
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

        when(departmentRepository.findById(departmentId)).thenReturn(Optional.of(department));

        // Act
        Theatre result = departmentService.getDepartmentById(departmentId);

        // Assert
        assertEquals(department, result);
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

        when(departmentRepository.findBytheatreName(theatreName)).thenReturn(department);

        // Act
        Theatre result = departmentService.getDepartmentBytheatreName(theatreName);

        // Assert
        assertEquals(department, result);
    }
}
//package com.mscomm.departmentservice.service;
//
//import static org.mockito.Mockito.times;
//import static org.mockito.Mockito.verify;
//
//import java.util.ArrayList;
//import java.util.List;
//
////import org.junit.Assert;
//import org.junit.jupiter.api.Assertions;
//import org.junit.Before;
//import org.junit.jupiter.api.Test;
//import org.junit.RunWith;
//import org.mockito.InjectMocks;
//import org.mockito.Mock;
//import org.mockito.Mockito;
//import org.springframework.test.context.junit4.SpringRunner;
//
//import com.mscomm.departmentservice.entity.Theatre;
//import com.mscomm.departmentservice.repository.DepartmentRepository;
//import com.mscomm.departmentservice.service.impl.DepartmentServiceImpl;
//
//@RunWith(SpringRunner.class)
//public class DepartmentServiceImplTest {
//
//	@InjectMocks
//	private DepartmentServiceImpl departmentService;
//
//	@Mock
//	private DepartmentRepository departmentRepository;
//
//	@Before
//	public void setUp() {
//
//		
//		Theatre theatre = new Theatre();
//		theatre.setTheatreName("ajanta");
//		theatre.setId((long)4);
//		theatre.setTheatreAddress("pondy");
//		theatre.setTheatreSeats("3");
//	
//		
//		Theatre theatre1 = new Theatre();
//		theatre1.setId((long)4);
//		theatre1.setTheatreAddress("pondy");
//		theatre1.setTheatreSeats("3");
//		
//		
//		Mockito.when(departmentRepository.findBytheatreName(theatre.getTheatreName())).thenReturn(theatre);
//
//		List<Theatre> theatres = new ArrayList<Theatre>();
//		theatres.add(theatre1);
//		theatres.add(theatre);
//
//		Mockito.when(departmentRepository.findAll()).thenReturn(theatres);
//	}
//
//	@Test
//	public void getTheatreByTheatreName() {
//
//		String theatrename = "ajanta";
//		Theatre theatre = departmentService.getDepartmentBytheatreName(theatrename);
//		Assertions.assertEquals(theatre.getTheatreName(), theatrename);
//	}
//
//	@Test
//	public void saveTheatre() {
//
//		Theatre theatre = new Theatre();
//		theatre.setId((long) 2);
//		theatre.setTheatreName("ajanta ");
//		departmentService.saveDepartment(theatre);
//		verify(departmentRepository, times(1)).save(theatre);
//	}
//
//	@Test
//	public void getAllTheatres() {
//
//		List<Theatre> theatres = departmentService.getAllTheatres();
//		Assertions.assertEquals(theatres.size(), 2);
//	}
//}