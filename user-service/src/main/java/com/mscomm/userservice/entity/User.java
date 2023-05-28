package com.mscomm.userservice.entity;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.beans.factory.annotation.Value;
@Entity
@Table(name = "users")
@Setter
@Getter
@NoArgsConstructor
@AllArgsConstructor
public class User {
	 @Id
	    @GeneratedValue(strategy = GenerationType.IDENTITY)
	    private Long id;
	    private String name;
	    private String password;
	    private String email;
	    private String seat ="[]";
	    private String datetime = "08:00";
	    private String price = "100";
	    private String theatreId = "1";
	    private String movieId = "107";
	    private String restatus = "false";
	    
}
