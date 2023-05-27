import React, { useEffect, useState } from "react";
import axios from "axios";
import { Container, Grid, Toolbar,  FormControl, InputLabel, Select, MenuItem} from "@mui/material";
import MovieCards from "./MovieCards";
import { ReactSession } from 'react-client-session'
import { Apicalls } from "./Apicalls";
function Moviemain(){
  var re;
  const [data, setData] = useState([]);
  const [resp, setResp] = useState("");
  const [region, setRegion] = React.useState('India');
   var ids=ReactSession.get("id");
  console.log(ids);
  const handleChange = (event) => {
    setRegion(event.target.value);
  };

  const getData = async () => {
    var k = [];
    await axios
      .get("dataIN.json")
      .then((res) => { k = res.data.results.filter( (i) => i );setData(k);
        console.log(k);
      });
  };

  const getGData = async () => {
    
    var k = [];
    await axios
      .get("dataGL.json")
      .then((res) => { k = res.data.results.filter( (i) => i );setData(k);
        console.log(k);
      });
  };

  useEffect(() => {
    (region =='India' ? getData() : getGData())
    const udetail = {
      id: ReactSession.get("id"),
    }
    console.log(udetail);
    Apicalls.GetUser(udetail).then(response =>{
     //console.log(response.data.user.restatus);
     setResp(response.data.user.restatus)
     ReactSession.set("restatus",resp);
     console.log(resp);
    }
      ).catch(error => {
        console.error(error);
      });
 
    
  }, []);

  return (
    <Container>
      <Toolbar sx={{justifyContent:'end',marginTop:'05px'}}>
      <FormControl sx={{width:'150px'}}>
        <InputLabel >Region</InputLabel>
        <Select 
          value={region}
          label={`Region`}
          onChange={handleChange}
        >
          <MenuItem value='India' onClick={getData}>India</MenuItem>
          <MenuItem value='Global' onClick={getGData} >Global</MenuItem>
        </Select>
      </FormControl>
      </Toolbar>
      
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 2, sm: 8, md: 12 , lg:12}}
      >
         {data &&
            data.map((i, key) => (

          <Grid item xs={2} sm={4} md={4} key={key}>
             <MovieCards passed={i}  />
          </Grid>
        ))}
      </Grid>

    </Container>

  );
};

export default Moviemain;