package com.mscomm.movieservice.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.mscomm.movieservice.entity.Movie;

public interface DepartmentRepository extends JpaRepository<Movie,Long> {
	Movie findBymovieName(String movieName);
}
