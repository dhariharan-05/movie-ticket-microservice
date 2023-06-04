package com.mscomm.loyaltyservice.dto;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;

public class MovieDtoTest {

    @Test
    public void testMovieDto() {
        Long id = 1L;
        String movieName = "The Shawshank Redemption";
        String movieGenre = "Drama";
        String cbfcRating = "A";

        MovieDto movieDto = new MovieDto(id, movieName, movieGenre, cbfcRating);

        Assertions.assertEquals(id, movieDto.getId());
        Assertions.assertEquals(movieName, movieDto.getMovieName());
        Assertions.assertEquals(movieGenre, movieDto.getMoviegenre());
        Assertions.assertEquals(cbfcRating, movieDto.getCbfcrating());
    }
}