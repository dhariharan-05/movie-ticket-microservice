package com.mscomm.departmentservice.service;

import com.mscomm.departmentservice.entity.*;

public interface DepartmentService {
    Theatre saveDepartment(Theatre department);
    Theatre getDepartmentBytheatreName(String theatreName);
    Theatre getDepartmentById(Long departmentId);
}