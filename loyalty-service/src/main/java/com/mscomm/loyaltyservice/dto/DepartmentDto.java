package com.mscomm.loyaltyservice.dto;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Setter
@Getter
@AllArgsConstructor
@NoArgsConstructor
public class DepartmentDto {
	private Long id;
    private String theatreName;
    private String theatreAddress;
    private String theatreSeats;
}
