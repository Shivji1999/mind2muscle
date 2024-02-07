package com.mind2muscles.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.mind2muscles.model.Country;
import com.mind2muscles.model.State;

public interface StateRepository extends JpaRepository<State, Long>{
	
	List<State> findByCountry(Country country);
	Optional<State> findByName(String stateName);

}
