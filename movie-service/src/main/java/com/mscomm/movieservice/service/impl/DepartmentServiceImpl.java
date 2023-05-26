package com.mscomm.movieservice.service.impl;
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
		 return departmentRepository.findById(departmentId).get();
	}
	@Override
	public Movie getDepartmentBymovieName(String movieName) {
		 return departmentRepository.findBymovieName(movieName);
	}

}
