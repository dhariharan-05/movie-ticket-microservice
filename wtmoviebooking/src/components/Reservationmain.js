import React from 'react';
import { useEffect } from 'react';
import { Apicalls } from './Apicalls';
import { useState } from 'react';
import { ReactSession } from 'react-client-session';
import { PDFDownloadLink, Document, Page, Text, View, Image, StyleSheet } from '@react-pdf/renderer';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
//npm startimport './ticketConfirmationPage.css';

const styles = StyleSheet.create({
  container: {
    marginTop: 0,
    marginBottom: 50,
    textAlign: 'center',
    backgroundColor: '#1c1b1b',
    paddingTop: 10,
  },
  logo: {
    width: 200,
    height: 80,
    marginBottom: 10,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },
  pdfContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '-50vh',
  },
  detailsContainer: {
    border: '1px solid black',
    padding: 10,
    width: '80%',
  },
  detailText: {
    marginBottom: 5,
  },
  downloadButton: {
    backgroundColor: '#f6b745',
    color: 'black',
    padding: '10px 20px',
    borderRadius: 4,
    fontWeight: 'bold',
    textDecoration: 'none',
    textTransform: 'uppercase',
    cursor: 'pointer',
    display: 'inline-block',
    marginTop: 20,
    marginBottom :0,
  },
  toastContainer: {
    //position: 
    // top: '100%',
    // transform: 'translateY(-50%)',
  },
});

function Reservationmain() {
  const [data, setData] = useState();

  const [renderper, setRenderper] = useState();

  useEffect(() => {
    const udetail = {
      id: ReactSession.get('id'),
    };
    setRenderper(ReactSession.get('username'));

    Apicalls.GetUser(udetail)
      .then((response) => {
        console.log(response.data);
        setData(response.data);
        console.log(data.movie.movieName);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const handleDownload = () => {
    toast.success('PDF downloaded successfully!', {
      position: toast.POSITION.BOTTOM_RIGHT,
      autoClose: 8000,
    });
  };

  const MyDocument = () => (
    <Document>
      <Page>
        <View style={styles.container}>
          <Image style={styles.logo} src="/images/logos.png" />
          <Text style={styles.heading}>Reservation Details</Text>
        </View>
        <View style={styles.pdfContainer}>
          <View style={styles.detailsContainer}>
            <Text style={styles.detailText}>Datetime: {data.user.datetime}</Text>
            <Text style={styles.detailText}>Email: {data.user.email}</Text>
            <Text style={styles.detailText}>ID: {data.user.id}</Text>
            <Text style={styles.detailText}>Movie ID: {data.user.movieId}</Text>
            <Text style={styles.detailText}>Movie Name: {data.movie.movieName}</Text>
            <Text style={styles.detailText}>Name: {data.user.name}</Text>
            
            <Text style={styles.detailText}>Price: {data.user.price}</Text>
           
            <Text style={styles.detailText}>Seat: {data.user.seat}</Text>
            <Text style={styles.detailText}>Theatre ID: {data.user.theatreId}</Text>
            <Text style={styles.detailText}>Theatre Name: {data.department.theatreName}</Text>
          </View>
        </View>
      </Page>
    </Document>
  );

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
                
                <p>Price: {data.user.price}</p>
                
                <p>Seat: {data.user.seat}</p>
                <p>Theatre ID: {data.user.theatreId}</p>
                <p>Theatre Name: {data.department.theatreName}</p>
                <PDFDownloadLink document={<MyDocument />} fileName="reservation.pdf">
                  {({ blob, url, loading, error }) => (
                    <>
                      <button onClick={handleDownload} style={styles.downloadButton}>
                        {loading ? 'Loading document...' : 'Download Ticket'}
                      </button>
                      <ToastContainer />
                    </>
                  )}
                </PDFDownloadLink>
              </div>
            ) : (
              <p>Loading...Please hold on..Check if you're logged in if it takes more than a few seconds to load.</p>
            )}
          </div>
        </div>
      </div>
      <br></br>
    </div>
  );
}

export default Reservationmain;