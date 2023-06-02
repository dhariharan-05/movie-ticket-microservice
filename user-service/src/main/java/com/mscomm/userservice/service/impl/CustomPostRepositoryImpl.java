package com.mscomm.userservice.service.impl;
import org.springframework.data.jpa.repository.Lock;
import org.springframework.stereotype.Repository;

import jakarta.persistence.EntityManager;
import jakarta.persistence.LockModeType;
import jakarta.persistence.PersistenceContext;
import jakarta.transaction.Transactional;

import com.mscomm.userservice.repository.*;
import com.mscomm.userservice.entity.*;
@Repository
public class CustomPostRepositoryImpl implements CustomPostRepository{
//    @PersistenceContext
    private EntityManager entityManager;
 
    public CustomPostRepositoryImpl(EntityManager entityManager) {
        this.entityManager = entityManager;
    }
    @Override
    @Transactional
    public User findByIdAndLock(Long id, LockModeType lockMode) {
        return entityManager.find(User.class, id, lockMode);
    }
}
