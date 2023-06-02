package com.mscomm.theatreservice.controller;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.mscomm.theatreservice.entity.Theatre;
import com.mscomm.theatreservice.service.TheatreService;

import lombok.AllArgsConstructor;

@RestController
@RequestMapping("api/theatres")
@AllArgsConstructor
@CrossOrigin(origins="*")
public class TheatreController {

	private TheatreService departmentService;

    @PostMapping
    public ResponseEntity<Theatre> saveDepartment(@RequestBody Theatre department){
        Theatre savedDepartment = departmentService.saveDepartment(department);
        return new ResponseEntity<>(savedDepartment, HttpStatus.CREATED);
    }

    @GetMapping("{id}")
    public ResponseEntity<Theatre> getDepartmentById(@PathVariable("id") Long departmentId){
        Theatre department = departmentService.getDepartmentById(departmentId);
        return ResponseEntity.ok(department);
    }
    @GetMapping("/t/{theatreName}")
    public ResponseEntity<Theatre> getDepartmentBytheatreName(@PathVariable("theatreName") String theatreName){
        Theatre department = departmentService.getDepartmentBytheatreName(theatreName);
        return ResponseEntity.ok(department);
    }
}

