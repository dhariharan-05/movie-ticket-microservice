package com.mscomm.userservice.entity;

import org.junit.jupiter.api.Test;

import static org.assertj.core.api.Assertions.assertThat;

public class UserTest {

    @Test
    public void testUserEntity() {
        // Create a user instance
        User user = new User();
        user.setId(1L);
        user.setName("John Doe");
        user.setPassword("password");
        user.setEmail("john.doe@example.com");
        user.setSeat("A1");
        user.setDatetime("09:00");
        user.setPrice("120");
        user.setTheatreId("2");
        user.setMovieId("109");
        user.setRestatus("true");

        // Test the getters
        assertThat(user.getId()).isEqualTo(1L);
        assertThat(user.getName()).isEqualTo("John Doe");
        assertThat(user.getPassword()).isEqualTo("password");
        assertThat(user.getEmail()).isEqualTo("john.doe@example.com");
        assertThat(user.getSeat()).isEqualTo("A1");
        assertThat(user.getDatetime()).isEqualTo("09:00");
        assertThat(user.getPrice()).isEqualTo("120");
        assertThat(user.getTheatreId()).isEqualTo("2");
        assertThat(user.getMovieId()).isEqualTo("109");
        assertThat(user.getRestatus()).isEqualTo("true");

        // Test the setters
        user.setId(2L);
        user.setName("Jane Smith");
        user.setPassword("newpassword");
        user.setEmail("jane.smith@example.com");
        user.setSeat("B2");
        user.setDatetime("10:00");
        user.setPrice("150");
        user.setTheatreId("3");
        user.setMovieId("110");
        user.setRestatus("false");

        assertThat(user.getId()).isEqualTo(2L);
        assertThat(user.getName()).isEqualTo("Jane Smith");
        assertThat(user.getPassword()).isEqualTo("newpassword");
        assertThat(user.getEmail()).isEqualTo("jane.smith@example.com");
        assertThat(user.getSeat()).isEqualTo("B2");
        assertThat(user.getDatetime()).isEqualTo("10:00");
        assertThat(user.getPrice()).isEqualTo("150");
        assertThat(user.getTheatreId()).isEqualTo("3");
        assertThat(user.getMovieId()).isEqualTo("110");
        assertThat(user.getRestatus()).isEqualTo("false");
    }
}
