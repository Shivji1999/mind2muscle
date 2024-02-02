package com.mind2muscles.auth;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@AllArgsConstructor
@Data
public class RegisterRequest {
	private String fullName;
	private String email;
	private String phoneNumber;
	private String password;
}
