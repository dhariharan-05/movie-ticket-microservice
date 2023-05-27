
import Chip from "@mui/material/Chip";
import FaceIcon from "@mui/icons-material/Face";
import Paper from "@mui/material/Paper";
import LockIcon from "@mui/icons-material/Lock";
import { useEffect } from "react";
import { Apicalls } from './Apicalls'
import Switch from "@mui/material/Switch";
// import SeatPicker from "react-seat-picker";
import React, { useState } from "react";
import "./SeatPicker.css";
import {
  TextField,
  InputAdornment,
  FormControl,
  InputLabel,
  IconButton,
  Button,
  Input,
  Checkbox,
  Alert,
  Stack,
} from "@mui/material";
import Loginmain from "./Loginmain";
import Signup from "./Signup";
import { WidthFull } from "@mui/icons-material";
import { ReactSession } from 'react-client-session';
import { useNavigate } from "react-router-dom";

function Theatrepage() {
//   const ot = ReactSession.get("original_title")
//   const pop = ReactSession.get("popularity");
//   const lan = ReactSession.get("original_language");
const navigate = useNavigate();

  var tname=ReactSession.get("theatrename");
  var user=ReactSession.get("username");
  var ids=ReactSession.get("id");
  var password=ReactSession.get("password");
  var tid=ReactSession.get("tid");
  var email=ReactSession.get("email");
  var movienam= ReactSession.get("moviename")
var [movId,setMovieid] = useState("");
var [seat,setSeat] = useState("");
//   var mid=ReactSession.get("mid");

 useEffect(() =>{
  const mdetail2 = {
    movieName: ReactSession.get("moviename"),
    
  };
  const udetail = {
    id: ReactSession.get("id"),
  }
  Apicalls.GetMid(mdetail2)
      .then(response => {
        console.log(response);
         setMovieid(response.data.id);
        // console.log(movId); // Assuming the response has a boolean field indicating if the movie exists
        })
      .catch(error => {
        console.error(error);
      });
  Apicalls.GetUser(udetail)
  .then(response => {
    console.log(response.data.user.seat)
    setSeat(response.data.user.seat)
  })
    },[]);

console.log(user);
console.log(ids);
console.log(tid);
console.log(password);
console.log(email);
console.log(movienam);
console.log(movId);
console.log(seat);


var [selectedSeats, setSelectedSeats] = useState([]);
var [showDate, setShowDate] = useState("");
var [showTime, setShowTime] = useState("");
var [price,setPrice] = useState("");
const todayDate = new Date().toISOString().split("T")[0];

const handleSeatClick = (seat) => {
  if (selectedSeats.includes(seat)) {
    // Deselect the seat
    setSelectedSeats((prevSeats) =>
      prevSeats.filter((selectedSeat) => selectedSeat !== seat)
    );
  } else {
    // Select the seat
    setSelectedSeats((prevSeats) => [...prevSeats, seat]);
  }
};

const handleDateChange = (event) => {
  setShowDate(event.target.value);
};
const handleTimeChange = (event) => {
  setShowTime(event.target.value);
};

const numRows = 10; // Number of rows
const numColumns = 10; // Number of columns
const seatPrice = 100; // Price per seat
const unavailableSeats = seat; // Example of unavailable seats
const [updateSuccess, setUpdateSuccess] = useState(false); // State variable for update success
const renderSeats = () => {
  const seats = [];

  for (let row = 0; row < numRows; row++) {
    const rowSeats = [];

    for (let column = 0; column < numColumns; column++) {
      const seat = `${String.fromCharCode(65 + row)}${column + 1}`;
      const isAvailable = !unavailableSeats.includes(seat);

      rowSeats.push(
        <button
          key={seat}
          className={`seat ${selectedSeats.includes(seat) ? "selected" :""} ${isAvailable ? "available" : "unavailable"}`}
          onClick={() => handleSeatClick(seat)}
          disabled={!isAvailable}
        >
          {seat}
        </button>
      );
    }

    seats.push(
      <div key={row} className="row">
        <span className="row-name">{String.fromCharCode(65 + row)}</span>
        {rowSeats}
      </div>
    );
  }

  return seats;
};

const calculateTotalPrice = () => {
  return selectedSeats.length * seatPrice;
};

const handleSubmit = (event) => {
  event.preventDefault();
  // Perform actions on form submission
  console.log("Date:", showDate);
  console.log("Time:", showTime);
  console.log("Selected Seats:", selectedSeats);
  var p = calculateTotalPrice();
  setPrice(p);
  console.log(price);
  console.log("Total Price:", calculateTotalPrice());
  const seatt = `[${selectedSeats.join(", ")}]`; // Convert selectedSeats array to a string enclosed in square brackets
  console.log("Seats:", seatt);
  performPut(seatt,p);
};
function performPut(seatt,p){
 //var seatt= "E3";
  var sta= "true";
const udetail={
  id:ids,
  name:user,
  password:password,
  email:email,
  seat:seatt,
  datetime:showDate,
  price:p,
  theatreId:tid,
  movieId:movId,
  restatus:sta
}
//console.log(udetail);
Apicalls.PutUser(udetail)
 .then(() => {
  console.log("updated successfully")
  setUpdateSuccess(true); // Set the update success state to true

 })
 .catch(error => {
  console.error(error);
 })
}
useEffect(() => {
  if (updateSuccess) {
    const timer = setTimeout(() => {
      navigate("/movies"); // Redirect to '/movies' after 2 seconds
    }, 2000);

    return () => clearTimeout(timer); // Clear the timer on component unmount
  }
}, [updateSuccess, navigate]);

return (
  <div className="seat-picker">
    <div className="screen">SCREEN</div>
    <div className="seating-plan">{renderSeats()}</div>
    <div className="selected-seats">
      <h4>Selected Seats:</h4>
      <ul>
        {selectedSeats.map((seat) => (
          <li key={seat}>{seat}</li>
        ))}
      </ul>
      <h4>Total Price: Rs.{calculateTotalPrice()}</h4>
    </div>
    <form onSubmit={handleSubmit}>
      <div className="form-row">
        <label>Date:</label>
        <input type="date" value={showDate} onChange={handleDateChange} min={todayDate} required />
      </div>
      <div className="form-row">
        <label>Time:</label>
        <select value={showTime} onChange={handleTimeChange}>
          <option value="">hh:mm AM</option>
          <option value="09:00 AM">09:00 AM</option>
          <option value="12:00 PM">12:00 PM</option>
          <option value="03:00 PM">03:00 PM</option>
          <option value="06:00 PM">06:00 PM</option>
        </select>
      </div>
      <button type="submit">Submit</button>
      {updateSuccess &&
          <Alert severity="success" size="small">
           Booking success! Redirecting to movies .. 
          </Alert>
        }
    </form>
  </div>

  );
  }
  

export default Theatrepage;