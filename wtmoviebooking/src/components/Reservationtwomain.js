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
import { responsiveFontSizes } from "@mui/material";

function Reservationtwomain() {
//   const ot = ReactSession.get("original_title")
//   const pop = ReactSession.get("popularity");
//   const lan = ReactSession.get("original_language");
  const[movies,setMovies]=useState(false);
  const [theaterName, setTheaterName] = useState("");
  var [newid, setNewid] = useState("");
  var [name, setName] = useState("");
  var [email, setEmail] = useState("");
  var [password, setPassword] = useState("");
  var [resp, setResp] = useState(false);
  var [movName, setMovName] = useState("");
  const navigate = useNavigate();
  const [isClicked, setIsClicked] = useState(false);

const handleInputChange = (event) => {
    setTheaterName(event.target.value);
  };
  useEffect(() => {
  setEmail(ReactSession.get("email"));
  setPassword(ReactSession.get("password"))
  setName(ReactSession.get("username"))
   
    const mdetail = {
        movieName: ReactSession.get("original_title"),
        cbfcrating: ReactSession.get("popularity"),
        moviegenre: ReactSession.get("original_language")
      };
      const mdetail1 = {
        movieName: ReactSession.get("original_title"),
        
      };
   movsta = ReactSession.get("original_title")
//   Apicalls.Movies(mdetail).then(response=> {
//     setMovies(true)
//   }).catch(error => {
//     const error1=error;
//   });
Apicalls.CheckMovie(mdetail1)
      .then(response => {
        console.log(response);
        const movieExists = response.data.movieName;
        const moviefromWeb = response.data.id;
        setMovName(mdetail.movieName);
        console.log(movieExists); // Assuming the response has a boolean field indicating if the movie exists
        console.log(moviefromWeb);
        ReactSession.set("moviefromWeb",moviefromWeb);
        if (!movieExists) {
          // Movie details are not present in the database, add them
          Apicalls.Movies(mdetail)
            .then(() => {
              setMovies(true);
            })
            .catch(error => {
              console.error(error);
            });
        
        } else {
          // Movie details are already present in the database
          setMovies(true);
        }
      })
      .catch(error => {
        console.error(error);
      });
  
}, [ReactSession.get("original_title"), ReactSession.get("popularity"), ReactSession.get("original_language")]);
var movsta;
const handleSubmit = (event) => {
    ReactSession.set("moviename",movName);
     event.preventDefault();
     // Perform any desired action with the theaterName value
     console.log("Submitted theater name:", theaterName);
     // Reset the input value
     setTheaterName(theaterName);
    
     postUser();
     setIsClicked(true);
   };
   const postUser= () =>{
  console.log(password);
  console.log(email);
  console.log(name);
   const udetail1={
    name:name,
    password:password,
    email:email
   }
   Apicalls.PostUser(udetail1)
   .then(response => {
    console.log(response.data.id);
    setNewid(response.data.id);
   })
   .catch(error => {
    console.error(error);
   })

   }
  return (
    <div style={styles.container}>
  
    <form onSubmit={handleSubmit} style={styles.form}>
    <label>
        {isClicked ? (
          `Temporary Registration ID: ${newid}`
        ) : (
          'Click submit to generate a new temporary reservation ID using which you can login again and make reservations using the same credentials.'
        )}
      </label>      {/* <input
        type="text"
        value={theaterName}
        onChange={handleInputChange}
        placeholder="Enter theater name"
        style={styles.input}
      /> */}
      <button type="submit" style={{ ...styles.button, opacity: isClicked ? 0.5 : 1 }} disabled={isClicked}>
        Click here
      </button>
    </form>
</div>
);
}
  const styles = {
    container: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "100vh",
    },
    form: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      backgroundColor: "#f2f2f2",
      padding: "20px",
      borderRadius: "10px",
    },
    input: {
      width: "300px",
      padding: "10px",
      marginBottom: "10px",
      borderRadius: "5px",
      border: "1px solid #ccc",
    },
    button: {
      padding: "10px 20px",
      backgroundColor: "#007bff",
      color: "#fff",
      border: "none",
      borderRadius: "5px",
      cursor: "pointer",
    },
  };
  
  

export default Reservationtwomain;