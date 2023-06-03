package com.mscomm.loyaltyservice.entity;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name = "loyalty")
@NoArgsConstructor
@AllArgsConstructor
@Setter
@Getter
public class Loyalty {
	 @Id
	    @GeneratedValue(strategy = GenerationType.IDENTITY)
	    private Long id;
	    private Long userId;
	    private String userName;
	    private String userEmail;
	    private String coins;
	    private String discountedvalue;
}
