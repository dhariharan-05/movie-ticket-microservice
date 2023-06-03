package com.mscomm.loyaltyservice.dto;
import jakarta.persistence.Column;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Setter
@Getter
@NoArgsConstructor
@AllArgsConstructor
public class UserDto {

	  private Long id;
	    private String name;
	    private String password;
	    private String email;
	    private String seat;
	    private String datetime;
	    private String price;
	    private String theatreId;
	    private String movieId;
	    private String restatus;
}
