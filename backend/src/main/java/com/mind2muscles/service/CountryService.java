package com.mind2muscles.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.mind2muscles.model.Country;
import com.mind2muscles.model.Locality;
import com.mind2muscles.model.State;
import com.mind2muscles.repository.CountryRepository;
import com.mind2muscles.repository.LocalityRepository;
import com.mind2muscles.repository.StateRepository;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class CountryService {
	@Autowired
	private CountryRepository countryRepo;
	@Autowired
	private StateRepository stateRepo;
	@Autowired
	private LocalityRepository localityRepo;
	
	public List<Country> getCountryList(){
		return countryRepo.findAll();
	}
	
	public List<State> getStatesByCountryName(String countryName) throws Exception{
		Country country = countryRepo.findById(Long.parseLong(countryName))
				.orElseThrow(()-> new RuntimeException("No Country Found"));
		List<State> states = stateRepo.findByCountry(country);
		if(states.isEmpty()) throw new RuntimeException("No states found");
		
		return states;
	}
	
	public List<Locality> getLocalitiesByStateName(String stateName) throws Exception{
		State state = stateRepo.findById(Long.parseLong(stateName))
				.orElseThrow(()-> new RuntimeException("No State Found"));
		List<Locality> localities = localityRepo.findByState(state);
		if(localities.isEmpty()) throw new RuntimeException("No states found");
		
		return localities;
	}
}
