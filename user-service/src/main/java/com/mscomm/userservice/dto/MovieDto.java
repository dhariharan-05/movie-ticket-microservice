package com.mscomm.userservice.dto;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Setter
@Getter
@AllArgsConstructor
@NoArgsConstructor
public class MovieDto {

	private Long id;
    private String movieName;
    private String moviegenre;
    private String cbfcrating;

}
