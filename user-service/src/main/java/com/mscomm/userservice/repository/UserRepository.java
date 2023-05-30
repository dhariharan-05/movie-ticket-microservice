package com.mscomm.userservice.repository;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import com.mscomm.userservice.entity.*;
public interface UserRepository extends JpaRepository<User, Long>{
//  User findByName(String userName);
    List<User> findByTheatreIdAndMovieId(String theatreId, String movieId);
    List<User> findByTheatreIdAndMovieIdAndRestatusAndDatetime(String theatreId, String movieId, String restatus, String datetime);
}
