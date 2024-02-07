package com.mind2muscles.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.mind2muscles.model.Locality;
import com.mind2muscles.model.State;

public interface LocalityRepository extends JpaRepository<Locality, Long>{
	
	List<Locality> findByState(State state);

}
