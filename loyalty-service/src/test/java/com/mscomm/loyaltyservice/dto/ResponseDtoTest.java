package com.mscomm.loyaltyservice.dto;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;

public class ResponseDtoTest {

    @Test
    public void testResponseDto() {
        DepartmentDto department = new DepartmentDto();
        MovieDto movie = new MovieDto(1L, "The Shawshank Redemption", "Drama", "A");
        UserDto user = new UserDto();

        ResponseDto responseDto = new ResponseDto(department, movie, user);

        Assertions.assertEquals(department, responseDto.getDepartment());
        Assertions.assertEquals(movie, responseDto.getMovie());
        Assertions.assertEquals(user, responseDto.getUser());
    }
}