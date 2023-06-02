package com.mscomm.theatreservice.service.impl;
import org.springframework.stereotype.Service;

import com.mscomm.theatreservice.entity.Theatre;
import com.mscomm.theatreservice.repository.TheatreRepository;
import com.mscomm.theatreservice.service.TheatreService;

import lombok.AllArgsConstructor;

@Service
@AllArgsConstructor

public class TheatreServiceImpl implements TheatreService{
	
	 private TheatreRepository departmentRepository;
	@Override
	public Theatre saveDepartment(Theatre department) {
	return departmentRepository.save(department);
	}

	@Override
	public Theatre getDepartmentById(Long departmentId) {
		 return departmentRepository.findById(departmentId).get();
	}
	@Override
	public Theatre getDepartmentBytheatreName(String theatreName) {
		 return departmentRepository.findBytheatreName(theatreName);
	}

}
