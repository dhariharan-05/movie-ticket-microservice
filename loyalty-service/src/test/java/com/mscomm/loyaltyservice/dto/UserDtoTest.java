package com.mscomm.loyaltyservice.dto;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;

public class UserDtoTest {

    @Test
    public void testUserDto() {
        Long id = 1L;
        String name = "John Doe";
        String password = "password123";
        String email = "john.doe@example.com";
        String seat = "A1";
        String datetime = "2023-06-04 12:00 PM";
        String price = "10.99";
        String theatreId = "12345";
        String movieId = "67890";
        String restatus = "TRUE";

        UserDto userDto = new UserDto(id, name, password, email, seat, datetime, price, theatreId, movieId, restatus);

        Assertions.assertEquals(id, userDto.getId());
        Assertions.assertEquals(name, userDto.getName());
        Assertions.assertEquals(password, userDto.getPassword());
        Assertions.assertEquals(email, userDto.getEmail());
        Assertions.assertEquals(seat, userDto.getSeat());
        Assertions.assertEquals(datetime, userDto.getDatetime());
        Assertions.assertEquals(price, userDto.getPrice());
        Assertions.assertEquals(theatreId, userDto.getTheatreId());
        Assertions.assertEquals(movieId, userDto.getMovieId());
        Assertions.assertEquals(restatus, userDto.getRestatus());
    }
}