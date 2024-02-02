package com.mind2muscles.auth;

import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.mind2muscles.config.JwtService;
import com.mind2muscles.model.User;
import com.mind2muscles.repository.UserRepository;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class AuthenticationService {
	
	private final UserRepository repo;
	private final PasswordEncoder passwordEncoder;
	private final JwtService service;
	private final AuthenticationManager authenticationManager;
	
	public AuthenticationResponse register(RegisterRequest request) {
		var user = User.builder()
				.name(request.getFullName())
				.email(request.getEmail())
				.mobile(request.getPhoneNumber())
				.password(passwordEncoder.encode(request.getPassword()))
				.build();
		repo.save(user);
		var token = service.generateToken(user);
		return AuthenticationResponse.builder()
				.token(token)
				.build();		
	}

	public AuthenticationResponse authenticate(AuthenticationRequest request) {
		authenticationManager.authenticate(
				new UsernamePasswordAuthenticationToken(
						request.getPhoneNumber(), 
						request.getPassword()
						)
				);
		var user = repo.findByMobile(request.getPhoneNumber()).orElseThrow();
		var token = service.generateToken(user);
		return AuthenticationResponse.builder()
				.token(token)
				.build();
	}
	
}
