package com.mscomm.userservice.service.impl;
import com.mscomm.userservice.dto.ResponseDto;
import java.util.logging.Logger;

import com.mscomm.userservice.entity.User;
import com.mscomm.userservice.service.*;

import jakarta.persistence.LockModeType;

import com.mscomm.userservice.repository.*;
import org.springframework.web.client.RestTemplate;
import com.mscomm.userservice.dto.*;
import lombok.AllArgsConstructor;

import java.util.List;
import java.util.concurrent.locks.Lock;
import java.util.concurrent.locks.ReentrantLock;
import java.util.function.Supplier;

import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
@Service
@AllArgsConstructor
public class UserServiceImpl implements UserService {
	 private static boolean isExecuting = false;
	    private final Lock lock = new ReentrantLock();
	 private UserRepository userRepository;
	    private RestTemplate restTemplate;
		 private CustomPostRepositoryImpl cpr;

		 private static final Logger LOG = Logger.getLogger(UserServiceImpl.class.getName());

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
//                .getForEntity("http://theatre-service:8082/api/theatres/" + user.getTheatreId(),
                .getForEntity("http://localhost:8082/api/theatres/" + user.getTheatreId(),

        		DepartmentDto.class);

        ResponseEntity<MovieDto> responseEntity1 = restTemplate
//                .getForEntity("http://movie-service:8083/api/Movies/" + user.getMovieId(),
                .getForEntity("http://localhost:8083/api/Movies/" + user.getMovieId(),

        		MovieDto.class);

        DepartmentDto departmentDto = responseEntity.getBody();
        MovieDto movieDto = responseEntity1.getBody();
//        logger.info((Supplier<String>) responseEntity.getStatusCode());
        LOG.info("Status Code: " + responseEntity.getStatusCode());

//        System.out.println(responseEntity.getStatusCode());

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
	public User getUserByIdWithLock(Long id) {
        LockModeType lockMode = LockModeType.PESSIMISTIC_WRITE; // Choose the appropriate lock mode

        // Acquiring the lock
        boolean lockAcquired = lock.tryLock();
        if (!lockAcquired) {
            throw new IllegalStateException("Another thread is already executing.");
        }

        try {
//            System.out.println("Acquiring lock for User with ID: " + id);
//            User user = cpr.findByIdAndLock(id, lockMode);
//            System.out.println("Lock acquired for User with ID: " + id);
//
//            try {
//                // Introduce a delay to hold the lock
//                System.out.println("Please wait..."); // Print "Please wait" message
//                Thread.sleep(500); // Delay of 5 seconds
//                // Perform any desired operations while the lock is held
//            } catch (InterruptedException e) {
//                e.printStackTrace();
//            }
//
//            // Releasing the lock
//            System.out.println("Releasing lock for User with ID: " + id);
//            // Release the lock by either committing or rolling back the transaction
//
//            return user;
        	LOG.info("Acquiring lock for User with ID: " + id);
        	User user = cpr.findByIdAndLock(id, lockMode);
        	LOG.info("Lock acquired for User with ID: " + id);

        	try {
        	    // Introduce a delay to hold the lock
        	    LOG.info("Please wait..."); // Log "Please wait" message
        	    Thread.sleep(500); // Delay of 5 seconds
        	    // Perform any desired operations while the lock is held
        	} catch (InterruptedException e) {
        	    LOG.severe("InterruptedException occurred: " + e.getMessage());
        	    e.printStackTrace();
        	}

        	// Releasing the lock
        	LOG.info("Releasing lock for User with ID: " + id);
        	// Release the lock by either committing or rolling back the transaction

        	return user;

        } finally {
            lock.unlock();
        }
    }

	
	@Override
	public List<User> getByTheatreIdAndMovieId(String theatreId, String movieId) {
		
	    return userRepository.findByTheatreIdAndMovieId(theatreId, movieId);
	}
	@Override
	public List<User> getByTheatreIdAndMovieIdAndDatetime(String theatreId, String movieId, String datetime) {
		String restatus = "true";
	    return userRepository.findByTheatreIdAndMovieIdAndRestatusAndDatetime(theatreId, movieId, restatus, datetime);
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
