package com.mscomm.loyaltyservice.dto;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;

public class DepartmentDtoTest {

    @Test
    public void testDepartmentDto() {
        // Create a DepartmentDto object
        Long id = 1L;
        String theatreName = "Ajanta";
        String theatreAddress = "123 Main St";
        String theatreSeats = "100";
        DepartmentDto departmentDto = new DepartmentDto(id, theatreName, theatreAddress, theatreSeats);

        // Verify the values of the DepartmentDto object
        Assertions.assertEquals(id, departmentDto.getId());
        Assertions.assertEquals(theatreName, departmentDto.getTheatreName());
        Assertions.assertEquals(theatreAddress, departmentDto.getTheatreAddress());
        Assertions.assertEquals(theatreSeats, departmentDto.getTheatreSeats());
    }
}