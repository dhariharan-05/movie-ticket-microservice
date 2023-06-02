package com.mscomm.theatreservice.entity;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name = "theatres")
@NoArgsConstructor
@AllArgsConstructor
@Setter
@Getter
public class Theatre {

	  @Id
	    @GeneratedValue(strategy = GenerationType.IDENTITY)
	    private Long id;
	    private String theatreName;
	    private String theatreAddress;
	    private String theatreSeats;
	    
}
