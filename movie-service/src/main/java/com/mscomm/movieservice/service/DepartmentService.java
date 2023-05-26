package com.mscomm.movieservice.service;

import com.mscomm.movieservice.entity.*;

public interface DepartmentService {
    Movie saveDepartment(Movie department);

    Movie getDepartmentById(Long departmentId);
    Movie getDepartmentBymovieName(String movieName);
}