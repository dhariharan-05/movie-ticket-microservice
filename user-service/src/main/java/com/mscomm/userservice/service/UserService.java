package com.mscomm.userservice.service;
import com.mscomm.userservice.entity.*;

import java.util.List;

import com.mscomm.userservice.dto.ResponseDto;
public interface UserService {
	User saveUser(User user);
    User getUserById(Long userId);
    ResponseDto getUser(Long userId);
    List<User> getByTheatreIdAndMovieId(String theatreId, String movieId);

//    ResponseDto getUserByName(String userName);
}
