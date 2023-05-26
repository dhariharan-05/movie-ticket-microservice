package com.mscomm.departmentservice.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.mscomm.departmentservice.entity.Theatre;

public interface DepartmentRepository extends JpaRepository<Theatre,Long> {
Theatre findBytheatreName(String theatreName);
}
