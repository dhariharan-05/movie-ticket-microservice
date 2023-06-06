import React, { useState, useEffect } from 'react';
import { Apicalls } from './Apicalls';
import { ReactSession } from 'react-client-session';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';

import {
  InputLabel,
  Typography,
  Alert,
  Button,
  Container,
  FormControl,
  FormGroup,
  Grid,
  TextField,
  CircularProgress,
} from '@mui/material';
import Moment from 'react-moment';
import moment from 'moment';

function Verifymain() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [dateOfBirth, setDateOfBirth] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);
  const [dobverify, setDobverify] = useState('');
  const [formattedDate, setFormatteddate] = useState('');
  const [detailsmatched, setDetailsmatched] = useState(false);
  const [agematched, setAgematched] = useState(false);
  const [notverified, setNotverified] = useState(false);

  const [call, setCall] = useState();

  const navigate = useNavigate();

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = (e) => {
      const base64File = e.target.result;
      console.log(base64File);
      ReactSession.set('uploadedFile', base64File);
    };
    reader.readAsDataURL(file);

    setSelectedFile(file);
  };

  const handleDateOfBirthChange = (event) => {
    // setCall(true);
    const dob = event.target.value;
    setFormatteddate(moment(dob).format('DD/MM/YYYY'));
    setDateOfBirth(dob);
    
  };

  const handleVerify = () => {
    setIsLoading(true);
    setIsButtonDisabled(true);
    setCall(true);
    console.log('Verifying...');
    console.log('Selected File:', selectedFile);
    console.log('Date of Birth:', dateOfBirth);
  };

  const matchDetails = () => {

    if(dobverify !== 'null'){
      
      console.log(dobverify);
      console.log(formattedDate);
      console.log(typeof dobverify);
      console.log(typeof formattedDate);
    if (dobverify.trim() === formattedDate.trim()) {
      
      setDetailsmatched(dobverify);
      console.log(dobverify);      
    } else {
      setDetailsmatched(false);
      
      console.log(false);
     
    }
  }
  };

  const ageDetails = () => {
    console.log("hi")
    console.log(dobverify);
    console.log(detailsmatched)
    if (dobverify && detailsmatched) {

      const dobParts = dobverify.split('/');
      const dob = new Date(dobParts[2], dobParts[1] - 1, dobParts[0]);
      const today = new Date();
      console.log(today);

      const ageDiff = today.getFullYear() - dob.getFullYear();
      const monthDiff = today.getMonth() - dob.getMonth();
      const dayDiff = today.getDate() - dob.getDate();


      if (ageDiff >= 18) {
        setAgematched(true);
      } else {
        setAgematched(false);
        
      }
    } else {
      setAgematched(false);
      
      console.log(detailsmatched);
    }
  };

  // useEffect(() => {
  //   performVerify();
  //   matchDetails();
  //   ageDetails();
  // }, [dobverify,call,formattedDate]);
  useEffect(() => {
    performVerify();
  }, [dobverify, call]);
  
  useEffect(() => {
    matchDetails();
  }, [dobverify, formattedDate]);
  
  useEffect(() => {
    ageDetails();
  }, [dobverify, detailsmatched]);
  
  

  useEffect(() => {
    if (agematched) {
      const timer = setTimeout(() => {
        navigate('/tpage');
      }, 2000);

      return () => clearTimeout(timer);
    }
  }, [agematched, navigate]);
  useEffect(() => {
    if (notverified) {
      const timer = setTimeout(() => {
        navigate('/movies');
      }, 2000);

      return () => clearTimeout(timer);
    }
  }, [notverified, navigate]);

  const performVerify = () => {
    if (call) {
      console.log("executing performverify")
      const vdetail = {
        base64Image: ReactSession.get('uploadedFile'),
        OCREngine: '2',
      };
      Apicalls.Verify(vdetail)
        .then((response) => {
          console.log(response.data.ParsedResults[0].ParsedText);
          const text = response.data.ParsedResults[0].ParsedText;
          const regex = /DOB\D*[:\n]\D*(\d{2}[-/]\d{2}[-/]\d{4})/;
          const match = text.match(regex);
          if (match) {
            const dob = match[1];
            setDobverify(dob);
          } else {
            console.log('DOB not found');
          }
        })
        .catch((error) => {
          console.error(error);
          setNotverified(true);
        })
        .finally(() => {
          setIsLoading(false);
          setIsButtonDisabled(false);
        });
    }
  };

  return (
    <Container maxWidth="sm" style={{ paddingTop: '50px' }}>
      <Grid container spacing={3}>
      <Grid item xs={12}>
          <Typography variant="h4" align="center" gutterBottom>
            OCR User Age Verification
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <FormGroup>
            <InputLabel htmlFor="upload-file">Upload Proof(Presently supports any government issued document with<br></br> date only in DD/MM/YYYY format)</InputLabel>
            <TextField
              type="file"
              id="upload-file"
              onChange={handleFileChange}
              fullWidth
              variant="outlined"
            />
          </FormGroup>
        </Grid>

        <Grid item xs={12}>
          <FormGroup>
            <InputLabel htmlFor="dob">Date of Birth</InputLabel>
            <TextField
              type="date"
              id="dob"
              value={dateOfBirth}
              onChange={handleDateOfBirthChange}
              fullWidth
              variant="outlined"
            />
          </FormGroup>
        </Grid>

        <Grid item xs={12}>
          <Button
            variant="contained"
            color="primary"
            onClick={handleVerify}
            disabled={isButtonDisabled}
          >
            Verify
          </Button>
          <br />
        </Grid>
      </Grid>
      {dobverify && (
        <div>
          Extracted Date Of Birth: {dobverify}
          <br />
          Given input: {formattedDate}
          <br />
        </div>
      )}
      {detailsmatched && agematched && (
        <div>
          Matching details...
          <br />
          Details matched!
          <br />
          Calculating age...
          <br />
          Age matched!
          <br />
          Please wait...
          <Alert severity="success" size="small">
            Booking success! Redirecting to movies...
          </Alert>
        </div>
      )}
            {(!detailsmatched || !agematched || notverified) && (
        <Alert severity="info" size="small">
        You are trying to book 18+ age restricted movies.Please verify age to proceed...
      </Alert>
      )}
      {(!detailsmatched || !agematched || notverified) && (
        <Alert severity="info" size="small">
        Any additional seats booked will also have to comply with the restrictions.By filling out this form you take responsibility that you will book tickets accordingly.
      </Alert>
      )}
      {isLoading && (
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
          <CircularProgress />
        </div>
      )}
      <br />
    </Container>
  );
}

export default Verifymain;
