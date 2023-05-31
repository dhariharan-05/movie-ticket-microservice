package com.mscomm.userservice.repository;
//import org.springframework.data.jpa.repository.Lock;
import jakarta.persistence.LockModeType;
import com.mscomm.userservice.entity.*;

public interface CustomPostRepository {
	User findByIdAndLock(Long id, LockModeType lockMode);
}
