
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

import Loginmain from "./Loginmain";
import Signup from "./Signup";
import { WidthFull } from "@mui/icons-material";
import { ReactSession } from 'react-client-session';
import { useNavigate } from "react-router-dom";

function Theatrepage() {
//   const ot = ReactSession.get("original_title")
//   const pop = ReactSession.get("popularity");
//   const lan = ReactSession.get("original_language");
let navigate = useNavigate();
  var tname=ReactSession.get("theatrename");
  var user=ReactSession.get("username");
  var id=ReactSession.get("id");
  var password=ReactSession.get("password");
  var tid=ReactSession.get("tid");
  var email=ReactSession.get("email");
  var movienam= ReactSession.get("moviename")

//   var mid=ReactSession.get("mid");
const mdetail2 = {
    movieName: ReactSession.get("original_title"),
    
  };
  
console.log(id);
console.log(tid);
console.log(password);
console.log(email);
console.log(movienam);


const [selectedSeats, setSelectedSeats] = useState([]);
const [showDate, setShowDate] = useState("");
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

const numRows = 10; // Number of rows
const numColumns = 10; // Number of columns
const seatPrice = 100; // Price per seat

const renderSeats = () => {
  const seats = [];

  for (let row = 0; row < numRows; row++) {
    const rowSeats = [];

    for (let column = 0; column < numColumns; column++) {
      const seat = `${String.fromCharCode(65 + row)}${column + 1}`;
      rowSeats.push(
        <button
          key={seat}
          className={`seat ${selectedSeats.includes(seat) ? "selected" : ""}`}
          onClick={() => handleSeatClick(seat)}
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
  console.log("Selected Seats:", selectedSeats);
  console.log("Total Price:", calculateTotalPrice());
};

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
        <select>
          <option value="09:00 AM">09:00 AM</option>
          <option value="12:00 PM">12:00 PM</option>
          <option value="03:00 PM">03:00 PM</option>
          <option value="06:00 PM">06:00 PM</option>
        </select>
      </div>
      <button type="submit">Submit</button>
    </form>
  </div>
    

  );
  }
  

export default Theatrepage;