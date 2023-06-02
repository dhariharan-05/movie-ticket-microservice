package com.mscomm.userservice.dto;

import org.junit.jupiter.api.Test;

import static org.assertj.core.api.Assertions.assertThat;

public class MovieDtoTest {

    @Test
    public void testMovieDto() {
        // Create a MovieDto instance
        MovieDto movieDto = new MovieDto(1L, "Movie Name", "Genre", "CBFC Rating");

        // Test the getters
        assertThat(movieDto.getId()).isEqualTo(1L);
        assertThat(movieDto.getMovieName()).isEqualTo("Movie Name");
        assertThat(movieDto.getMoviegenre()).isEqualTo("Genre");
        assertThat(movieDto.getCbfcrating()).isEqualTo("CBFC Rating");

        // Test the setters
        movieDto.setId(2L);
        movieDto.setMovieName("New Movie Name");
        movieDto.setMoviegenre("New Genre");
        movieDto.setCbfcrating("New CBFC Rating");

        assertThat(movieDto.getId()).isEqualTo(2L);
        assertThat(movieDto.getMovieName()).isEqualTo("New Movie Name");
        assertThat(movieDto.getMoviegenre()).isEqualTo("New Genre");
        assertThat(movieDto.getCbfcrating()).isEqualTo("New CBFC Rating");
    }
}
