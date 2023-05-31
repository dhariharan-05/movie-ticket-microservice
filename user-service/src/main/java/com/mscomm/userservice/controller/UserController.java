package com.mscomm.userservice.controller;

import lombok.AllArgsConstructor;
import com.mscomm.userservice.dto.ResponseDto;
import com.mscomm.userservice.entity.User;
import com.mscomm.userservice.service.UserService;

import java.util.ArrayList;
import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
@RestController
@RequestMapping("api/users")
@AllArgsConstructor
@CrossOrigin(origins="*")
public class UserController {
	  private UserService userService;

	    @PostMapping
	    public ResponseEntity<User> saveUser(@RequestBody User user){
	        User savedUser = userService.saveUser(user);
	        return new ResponseEntity<>(savedUser, HttpStatus.CREATED);
	    }

	    @GetMapping("{id}")
	    public ResponseEntity<ResponseDto> getUser(@PathVariable("id") Long userId){
	        ResponseDto responseDto = userService.getUser(userId);
	        return ResponseEntity.ok(responseDto);
	    }
	    @GetMapping("/{tid}/{mid}")
	    public List<ResponseEntity<User>> getUser(@PathVariable("tid") String theatreId, @PathVariable("mid") String movieId) {
	        List<User> users = userService.getByTheatreIdAndMovieId(theatreId, movieId);

	        List<ResponseEntity<User>> responseEntities = new ArrayList<>();

	        for (User user : users) {
	            responseEntities.add(ResponseEntity.ok(user));
	        }

	        return responseEntities;
	    }
	    @GetMapping("/{tid}/{mid}/{date}")
	    public List<ResponseEntity<User>> getUserByDetails(@PathVariable("tid") String theatreId, @PathVariable("mid") String movieId,  @PathVariable("date") String datetime) {
	        List<User> users = userService.getByTheatreIdAndMovieIdAndDatetime(theatreId, movieId, datetime);

	        List<ResponseEntity<User>> responseEntities = new ArrayList<>();

	        for (User user : users) {
	            responseEntities.add(ResponseEntity.ok(user));
	        }

	        return responseEntities;
	    }

	    @PutMapping("/{id}")
	    public ResponseEntity<User> updateUser(@PathVariable("id") Long userId, @RequestBody User updatedUser) {
	        User user = userService.getUserByIdWithLock(userId);
	        
	        if (user == null) {
	            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
	        }

	        // Update the fields of the existing user with the new values
	        user.setName(updatedUser.getName());
	        user.setPassword(updatedUser.getPassword());
	        user.setEmail(updatedUser.getEmail());
	        user.setSeat(updatedUser.getSeat());
	        user.setDatetime(updatedUser.getDatetime());
	        user.setPrice(updatedUser.getPrice());
	        user.setTheatreId(updatedUser.getTheatreId());
	        user.setMovieId(updatedUser.getMovieId());
	        user.setRestatus(updatedUser.getRestatus());

	        User updatedUser1 = userService.saveUser(user);
	        return new ResponseEntity<>(updatedUser1, HttpStatus.OK);
	    }
	}
//	    @GetMapping("{name}")
//	    public ResponseEntity<ResponseDto> getUserByName(@PathVariable("name") String userName){
//	        ResponseDto responseDto = userService.getUserByName(userName);
//	        return ResponseEntity.ok(responseDto);
//	    }

