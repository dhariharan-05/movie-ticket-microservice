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
import { useNavigate } from "react-router-dom";
import Cancelresv from "./pages/Cancelresv";
import { ReactSession } from 'react-client-session';

import { Container, Grid, Toolbar,  FormControl, InputLabel, Select, MenuItem,Button, colors} from "@mui/material";
function CancelReservation() {
    const [isConfirming, setIsConfirming] = useState(false);
    const navigate = useNavigate();
    var ids=ReactSession.get("id");
    var password=ReactSession.get("password");
    var user=ReactSession.get("username");

    var email=ReactSession.get("email");
    var restat=ReactSession.get("restatus");
    console.log(restat);
    const handleCancel = () => {
      if (isConfirming) {
        performCancellation();
        console.log('Reservation canceled');
        navigate("/movies");
      } else {
        setIsConfirming(true);
      }
    };
  function performCancellation(){
    const udetail={
        id:ids,
        name:user,
        password:password,
        email:email

    }
    Apicalls.PutUser(udetail)
    .then(() => {
     console.log("cancelled successfully")
     var f = "false";
     ReactSession.set("restatus",f)// Set the update success state to true
   
    })
    .catch(error => {
     console.error(error);
    })
  }
    const handleCancelConfirmation = () => {
      setIsConfirming(false);
      navigate("/movies")
    };
  
    return (
      <div>
        {isConfirming ? (
 <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>            <p style={{ marginRight: '10px' }}>Are you sure you want to cancel the reservation? </p>
            <Button variant="contained" color="primary" onClick={handleCancelConfirmation}>
              No, keep the reservation
            </Button>
            <Button variant="contained" color="secondary" style={{ marginLeft: '10px' }} onClick={handleCancel}>
              Yes, cancel the reservation
            </Button>
          </div>
        ) : (
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>  
          <Button variant="contained" color="primary" onClick={handleCancel}>
            Cancel your reservation
          </Button>
          </div>
        )}
      </div>
    );
  }
  export default CancelReservation;