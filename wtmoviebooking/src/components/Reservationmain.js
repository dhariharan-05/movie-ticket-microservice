
// Material UI imports
import Chip from "@mui/material/Chip";
import FaceIcon from "@mui/icons-material/Face";
import Paper from "@mui/material/Paper";
import LockIcon from "@mui/icons-material/Lock";
import { useEffect } from "react";
import { Apicalls } from './Apicalls'
import Switch from "@mui/material/Switch";
import { useState } from "react";
import Loginmain from "./Loginmain";
import Signup from "./Signup";
import { WidthFull } from "@mui/icons-material";
import { ReactSession } from 'react-client-session';
import { useNavigate } from "react-router-dom";
function Reservationmain() {
    const [data, setData] = useState();
    const [renderper, setRenderper] =useState();
        useEffect(() => {
      const udetail = {
        id: ReactSession.get("id"),
      };
      setRenderper(ReactSession.get("username"));

      Apicalls.GetUser(udetail)
        .then(response => {
          console.log(response.data);
          setData(response.data);
          console.log(data.movie.movieName);
        })
        .catch(error => {
          console.error(error);
        });
    }, []);
  
    return (
      <div>
     <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '60vh' }}>
     <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '60vh' }}>
  <div>
    <h1>Reservation Details:</h1>
    {data && renderper !== null ? (
      <div>
        <p>Datetime: {data.user.datetime}</p>
        <p>Email: {data.user.email}</p>
        <p>ID: {data.user.id}</p>
        <p>Movie ID: {data.user.movieId}</p>
        <p>Movie Name: {data.movie.movieName}</p>
        <p>Name: {data.user.name}</p>
        <p>Password: {data.user.password}</p>
        <p>Price: {data.user.price}</p>
        <p>Booked Status: {data.user.restatus}</p>
        <p>Seat: {data.user.seat}</p>
        <p>Theatre ID: {data.user.theatreId}</p>
        <p>Theatre Name: {data.department.theatreName}</p>
      </div>
    ) : (
      <p>Loading...Please hold on..Check if you're logged in if it takes more than a few seconds to load.</p>
    )}
  </div>
  </div>
</div>

</div>

    );
  }
  

export default Reservationmain;