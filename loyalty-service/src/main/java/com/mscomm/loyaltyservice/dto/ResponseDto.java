package com.mscomm.loyaltyservice.dto;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Setter
@Getter
@NoArgsConstructor
@AllArgsConstructor
public class ResponseDto {
	 private DepartmentDto department;
	 private MovieDto movie;
	    private UserDto user;
}
