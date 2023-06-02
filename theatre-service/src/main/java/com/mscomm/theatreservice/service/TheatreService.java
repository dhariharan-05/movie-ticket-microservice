package com.mscomm.theatreservice.service;

import com.mscomm.theatreservice.entity.*;

public interface TheatreService {
    Theatre saveDepartment(Theatre department);
    Theatre getDepartmentBytheatreName(String theatreName);
    Theatre getDepartmentById(Long departmentId);
}