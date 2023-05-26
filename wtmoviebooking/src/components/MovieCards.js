import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import YouTube from "react-youtube";
import { ReactSession } from 'react-client-session';

import {
  Button,
  CardActions,
  Typography,
  Card,
  CardContent,
  Rating,
  Modal,
  Paper,
} from "@mui/material";
import { Box } from "@mui/system";

// import not from "../Img/notfound.png";

function MovieCards(props){
  const [open, setOpen] = useState(false);
  const [keys, setKeys] = useState([]);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
 const usern = ReactSession.get("username");
 
  const opts = {
    height: "190",
    width: "340",
   
  };
  // const getVideos = async (id) => {
  //   var k = [];
  //   await axios
  //     .get(
  //       `https://api.themoviedb.org/3/movie/${id}/videos?api_key=b7cd3340a794e5a2f35e3abb820b497f&language=en-US`
  //     )

  //     .then((res) => {
  //       console.log(res.data.results);
  //       k = res.data.results.filter((i) => i.site === "YouTube");
  //       setKeys(k);
  //       console.log(k);
  //     });
  // };

  return (
    <div>
      <Card sx={{ maxWidth: 500, marginTop: "20px" }}>
        <img
          style={{ width: 290, height: 400 }}
          src={
            props.passed.poster_path == null
              ? "hello"
              : `https://image.tmdb.org/t/p/original/${props.passed.poster_path}`
          }
          alt="poster.exe"
        ></img>
        <CardContent>
          <Rating name="read-only" value={props.passed.popularity} readOnly />
          {props.passed.original_title === props.passed.title ? (
            <Typography gutterBottom variant="h6" component="div">
              {" "}
              {props.passed.title}{" "}
            </Typography>
          ) : (
            <div>
              <Typography gutterBottom variant="h6" component="div">
                {props.passed.original_title}
              </Typography>
              <Typography gutterBottom variant="h6" component="div">
                {props.passed.title}
              </Typography>
            </div>
          )}
          <Typography variant="body2" noWrap color="text.secondary">
            {props.passed.overview}
          </Typography>
        </CardContent>

        <CardActions>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
           <Link
  style={{ textDecoration: "none", marginRight: "10px" }}
  to={usern ? "/theatre" : "/login"}
  state={props.passed}
>
  <Button size="small" variant="contained" color="primary">
    Book Ticket
  </Button>
</Link>
            <Button
              size="small"
              variant="contained"
              color="secondary"
              onClick={() => {
                handleOpen(props.passed);

                // getVideos(props.passed.id);
              }}
            >
              more details
            </Button>
          </div>
        </CardActions>
      </Card>

      <Modal open={open} onClose={handleClose}>
        <Paper
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 1100,
            bgcolor: "background.paper",
            boxShadow: 24,
            p: 4,
          }}
        >
          <Card
            raised
            sx={{
              maxWidth: 1100,
              display: "flex",
              padding: "5px",
              alignItems: "center",
            }}
          >
            {props.passed.backdrop_path == null ? (
              <img
                style={{ width: 700, height: 500 }}
                src={`https://image.tmdb.org/t/p/original/${props.passed.poster_path}`}
                alt="poster.exe"
              ></img>
            ) : (
              <img
                style={{ width: 690, height: 500 }}
                src={`https://image.tmdb.org/t/p/original/${props.passed.backdrop_path}`}
                alt="poster.exe"
              ></img>
            )}

            <CardContent>
              <Typography variant="h6">
                IMBD Rating:{" "}
                <span style={{ color: "purple" }}>
                  {" "}
                  {props.passed.popularity}
                </span>
              </Typography>
              <Rating
                name="read-only"
                value={props.passed.popularity}
                readOnly
              />
              <Typography gutterBottom variant="h6" component="div">
                {props.passed.original_title}
              </Typography>
              <Typography gutterBottom>
                Release Date : {props.passed.release_date.slice(8, 11)}-
                {props.passed.release_date.slice(5, 7)}-
                {props.passed.release_date.slice(0, 4)}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {props.passed.overview}
              </Typography>

              {/* {keys &&
                keys.map(
                  (i, index) =>
                    index < 2 && (
                      <div key={i.key}>
                        <Typography>{i.name}</Typography>
                        <YouTube videoId={`${i.key}`} opts={opts} />
                      </div>
                    )
                )} */}
            </CardContent>
          </Card>
        </Paper>
      </Modal>
    </div>
  );
};

export default MovieCards;