
// Material UI imports
import Chip from "@mui/material/Chip";
import FaceIcon from "@mui/icons-material/Face";
import Paper from "@mui/material/Paper";
import LockIcon from "@mui/icons-material/Lock";

import Switch from "@mui/material/Switch";
import { useState } from "react";
import Loginmain from "./Loginmain";
import Login from "./pages/Login";
import Signup from "./Signup";
import { WidthFull } from "@mui/icons-material";

function Logincontroller() {
  const [checked, setChecked] = useState(true);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  return (
    <div className="App">
      <Paper elevation={3} style={{ padding: "10px", paddingBottom: "50px",margin:"auto",width:"450px"}}>
        <div align="center">
          {checked ? (
            <Chip
              icon={<LockIcon />}
              label="Log In"
              variant="outlined"
              color="info"
            />
          ) : (
            <Chip
              icon={<FaceIcon />}
              label="Sign Up"
              variant="outlined"
              color="info"
            />
          )}
          <br />

          <Switch
            checked={checked}
            onChange={handleChange}
            inputProps={{ "aria-label": "controlled" }}
          />
        </div>

        {checked ? <Loginmain /> : <Signup />}
      </Paper>
    </div>
  );
}

export default Logincontroller;