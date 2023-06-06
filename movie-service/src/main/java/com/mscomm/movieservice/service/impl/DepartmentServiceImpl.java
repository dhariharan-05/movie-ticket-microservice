package com.mscomm.movieservice.service.impl;
import java.util.Optional;

import org.springframework.stereotype.Service;

import com.mscomm.movieservice.entity.Movie;
import com.mscomm.movieservice.repository.DepartmentRepository;
import com.mscomm.movieservice.service.DepartmentService;

import lombok.AllArgsConstructor;

@Service
@AllArgsConstructor

public class DepartmentServiceImpl implements DepartmentService{
	
	 private DepartmentRepository departmentRepository;
	@Override
	public Movie saveDepartment(Movie department) {
	return departmentRepository.save(department);
	}


	@Override
	public Movie getDepartmentById(Long departmentId) {
	    Optional<Movie> optionalMovie = departmentRepository.findById(departmentId);
	    if (optionalMovie.isPresent()) {
	        return optionalMovie.get();
	    }
	    return null; // or throw an exception, depending on your requirement
	}

	@Override
	public Movie getDepartmentBymovieName(String movieName) {
		 return departmentRepository.findBymovieName(movieName);
	}

}
