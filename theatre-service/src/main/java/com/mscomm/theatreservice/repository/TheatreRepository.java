package com.mscomm.theatreservice.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.mscomm.theatreservice.entity.Theatre;

public interface TheatreRepository extends JpaRepository<Theatre,Long> {
Theatre findBytheatreName(String theatreName);
}
