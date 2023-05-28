package com.mscomm.userservice.service.impl;
import com.mscomm.userservice.dto.ResponseDto;
import com.mscomm.userservice.entity.User;
import com.mscomm.userservice.service.*;
import com.mscomm.userservice.repository.*;
import org.springframework.web.client.RestTemplate;
import com.mscomm.userservice.dto.*;
import lombok.AllArgsConstructor;

import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
@Service
@AllArgsConstructor

public class UserServiceImpl implements UserService {

	 private UserRepository userRepository;
	    private RestTemplate restTemplate;
	@Override
	public User saveUser(User user) {
		return userRepository.save(user);
	}

//	@Override
//	public ResponseDto getUserByName(String userName) {
//
//        ResponseDto responseDto = new ResponseDto();
//        User user = userRepository.findByName(userName);
//        UserDto userDto = mapToUser(user);
//
//        ResponseEntity<DepartmentDto> responseEntity = restTemplate
//                .getForEntity("http://localhost:8082/api/theatres/" + user.getTheatreId(),
//                DepartmentDto.class);
//
//        ResponseEntity<MovieDto> responseEntity1 = restTemplate
//                .getForEntity("http://localhost:8083/api/Movies/" + user.getMovieId(),
//                MovieDto.class);
//
//        DepartmentDto departmentDto = responseEntity.getBody();
//        MovieDto movieDto = responseEntity1.getBody();
//
//        System.out.println(responseEntity.getStatusCode());
//
//        responseDto.setUser(userDto);
//        responseDto.setDepartment(departmentDto);
//        responseDto.setMovie(movieDto);
//
//        return responseDto;
//	}
	@Override
	public ResponseDto getUser(Long userId) {

        ResponseDto responseDto = new ResponseDto();
        User user = userRepository.findById(userId).get();
        UserDto userDto = mapToUser(user);
        
        ResponseEntity<DepartmentDto> responseEntity = restTemplate
                .getForEntity("http://department-service:8082/api/theatres/" + user.getTheatreId(),
                DepartmentDto.class);

        ResponseEntity<MovieDto> responseEntity1 = restTemplate
                .getForEntity("http://movie-service:8083/api/Movies/" + user.getMovieId(),
                MovieDto.class);

        DepartmentDto departmentDto = responseEntity.getBody();
        MovieDto movieDto = responseEntity1.getBody();

        System.out.println(responseEntity.getStatusCode());

        responseDto.setUser(userDto);
        responseDto.setDepartment(departmentDto);
        responseDto.setMovie(movieDto);

        return responseDto;
	}
	@Override
	public User getUserById(Long userId) {


        User user = userRepository.findById(userId).get();
        

        return user;
	}
	
	@Override
	public List<User> getByTheatreIdAndMovieId(String theatreId, String movieId) {
		
	    return userRepository.findByTheatreIdAndMovieId(theatreId, movieId);
	}
	
	private UserDto mapToUser(User user){
        UserDto userDto = new UserDto();
        userDto.setId(user.getId());
        userDto.setName(user.getName());
        userDto.setPassword(user.getPassword());
        userDto.setEmail(user.getEmail());
        userDto.setSeat(user.getSeat());
        userDto.setDatetime(user.getDatetime());
        userDto.setPrice(user.getPrice());
        userDto.setMovieId(user.getMovieId());
        userDto.setTheatreId(user.getTheatreId());
        userDto.setRestatus(user.getRestatus());
        return userDto;
    }

}
