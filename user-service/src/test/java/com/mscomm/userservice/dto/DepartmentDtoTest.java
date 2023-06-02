package com.mscomm.userservice.dto;

import org.junit.jupiter.api.Test;

import static org.assertj.core.api.Assertions.assertThat;

public class DepartmentDtoTest {

    @Test
    public void testDepartmentDto() {
        // Create a DepartmentDto instance
        DepartmentDto departmentDto = new DepartmentDto();
        departmentDto.setId(1L);
        departmentDto.setTheatreName("Example Theatre");
        departmentDto.setTheatreAddress("123 Main Street");
        departmentDto.setTheatreSeats("A1, A2, A3");

        // Test the getters
        assertThat(departmentDto.getId()).isEqualTo(1L);
        assertThat(departmentDto.getTheatreName()).isEqualTo("Example Theatre");
        assertThat(departmentDto.getTheatreAddress()).isEqualTo("123 Main Street");
        assertThat(departmentDto.getTheatreSeats()).isEqualTo("A1, A2, A3");

        // Test the setters
        departmentDto.setId(2L);
        departmentDto.setTheatreName("New Theatre");
        departmentDto.setTheatreAddress("456 Elm Street");
        departmentDto.setTheatreSeats("B1, B2, B3");

        assertThat(departmentDto.getId()).isEqualTo(2L);
        assertThat(departmentDto.getTheatreName()).isEqualTo("New Theatre");
        assertThat(departmentDto.getTheatreAddress()).isEqualTo("456 Elm Street");
        assertThat(departmentDto.getTheatreSeats()).isEqualTo("B1, B2, B3");
    }
}
