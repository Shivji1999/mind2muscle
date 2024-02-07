package com.mind2muscles.common;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class ApiResponse {
	private Object data;
	private int statusCode;
}
