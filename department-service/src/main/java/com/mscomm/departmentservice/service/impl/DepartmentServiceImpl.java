package com.mscomm.departmentservice.service.impl;
import org.springframework.stereotype.Service;
import com.mscomm.departmentservice.entity.Theatre;
import com.mscomm.departmentservice.repository.DepartmentRepository;
import com.mscomm.departmentservice.service.DepartmentService;
import lombok.AllArgsConstructor;

@Service
@AllArgsConstructor

public class DepartmentServiceImpl implements DepartmentService{
	
	 private DepartmentRepository departmentRepository;
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
