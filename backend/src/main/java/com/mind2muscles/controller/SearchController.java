package com.mind2muscles.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.mind2muscles.common.ApiResponse;
import com.mind2muscles.service.CountryService;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/api/v1/search")
@CrossOrigin("*")
@RequiredArgsConstructor
public class SearchController {
	
	@Autowired
	private CountryService service;

	@GetMapping("/countries")
	public ResponseEntity<ApiResponse> getCountryList(){
		try {
			return ResponseEntity
					.ok(ApiResponse.builder()
							.data(service.getCountryList())
							.statusCode(200)
							.build());
		}catch(Exception e){
			return ResponseEntity
					.ok(ApiResponse.builder()
							.data(new String[] {})
							.statusCode(400)
							.build());
		}
	}
	
	@GetMapping("/countries/{countryName}")
	public ResponseEntity<ApiResponse> getStateList(@PathVariable String countryName){
		try {
			return ResponseEntity
					.ok(ApiResponse.builder()
							.data(service.getStatesByCountryName(countryName))
							.statusCode(200)
							.build());
		}catch(Exception e){
			return ResponseEntity
					.ok(ApiResponse.builder()
							.data(new String[] {})
							.statusCode(400)
							.build());
		}
	}
	
	@GetMapping("/state/{stateName}")
	public ResponseEntity<ApiResponse> getLocalityList(@PathVariable String stateName){
		try {
			return ResponseEntity
					.ok(ApiResponse.builder()
							.data(service.getLocalitiesByStateName(stateName))
							.statusCode(200)
							.build());
		}catch(Exception e){
			return ResponseEntity
					.ok(ApiResponse.builder()
							.data(new String[] {})
							.statusCode(400)
							.build());
		}
	}
}
