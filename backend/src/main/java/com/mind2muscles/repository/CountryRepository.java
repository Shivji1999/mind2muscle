package com.mind2muscles.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.mind2muscles.model.Country;

public interface CountryRepository extends JpaRepository<Country, Long>{
	
	Optional<Country> findByName(String countryName);

}
