package com.mscomm.movieservice.controller;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.mscomm.movieservice.entity.Movie;
import com.mscomm.movieservice.service.DepartmentService;

import lombok.AllArgsConstructor;

@RestController
@RequestMapping("api/Movies")
@AllArgsConstructor
@CrossOrigin(origins="*")
public class DepartmentController {

	private DepartmentService departmentService;

    @PostMapping
    public ResponseEntity<Movie> saveDepartment(@RequestBody Movie department){
        Movie savedDepartment = departmentService.saveDepartment(department);
        return new ResponseEntity<>(savedDepartment, HttpStatus.CREATED);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Movie> getDepartmentById(@PathVariable("id") Long departmentId){
        Movie department = departmentService.getDepartmentById(departmentId);
        return ResponseEntity.ok(department);
    }
    @GetMapping("/m/{movieName}")
    public ResponseEntity<Movie> getDepartmentByMoviename(@PathVariable("movieName") String movieName){
        Movie department = departmentService.getDepartmentBymovieName(movieName);
        return ResponseEntity.ok(department);
    }
}

