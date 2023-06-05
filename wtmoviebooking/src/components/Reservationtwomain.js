import React, { useEffect, useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Apicalls } from './Apicalls';
import { ReactSession } from 'react-client-session';
import { useNavigate } from 'react-router-dom';

function Reservationtwomain() {
  const [movies, setMovies] = useState(false);
  const [theaterName, setTheaterName] = useState('');
  const [newid, setNewid] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [resp, setResp] = useState(false);
  const [movName, setMovName] = useState('');
  const navigate = useNavigate();
  const [isClicked, setIsClicked] = useState(false);

  const handleInputChange = (event) => {
    setTheaterName(event.target.value);
  };

  useEffect(() => {
    setEmail(ReactSession.get('email'));
    setPassword(ReactSession.get('password'));
    setName(ReactSession.get('username'));
    

    const mdetail = {
      movieName: ReactSession.get('original_title'),
      cbfcrating: ReactSession.get('popularity'),
      moviegenre: ReactSession.get('original_language')
    };

    const mdetail1 = {
      movieName: ReactSession.get('original_title'),
    };

    var movsta = ReactSession.get('original_title');

    Apicalls.CheckMovie(mdetail1)
      .then((response) => {
        console.log(response);
        const movieExists = response.data.movieName;
        const moviefromWeb = response.data.id;
        setMovName(mdetail.movieName);
        console.log(movieExists);
        console.log(moviefromWeb);
        ReactSession.set('moviefromWeb', moviefromWeb);
        if (!movieExists) {
          Apicalls.Movies(mdetail)
            .then(() => {
              setMovies(true);
            })
            .catch((error) => {
              console.error(error);
            });
        } else {
          setMovies(true);
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }, [ReactSession.get('original_title'), ReactSession.get('popularity'), ReactSession.get('original_language')]);

  const handleSubmit = (event) => {
    ReactSession.set('moviename', movName);
    event.preventDefault();
    setTheaterName(theaterName);
    postUser();
    setIsClicked(true);
    ReactSession.set("username", null);

    toast.info('Registration/User ID generated!..redirecting you to login page', {
      autoClose: 5000,
      onClose: () => {
        
        navigate('/login');
      }
    });
  };

  const postUser = () => {
    console.log(password);
    console.log(email);
    console.log(name);
    const udetail1 = {
      name: name,
      password: password,
      email: email
    };

    Apicalls.PostUser(udetail1)
      .then((response) => {
        console.log(response.data.id);
        setNewid(response.data.id);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div style={styles.container}>
      <form onSubmit={handleSubmit} style={styles.form}>
        <label>
          {isClicked ? (
            `Registration/User ID: ${newid}`
          ) : (
            'Click submit to generate a new reservation/user ID using which you can login again and make reservations using the same credentials.'
          )}
        </label>
        <button type="submit" style={{ ...styles.button, opacity: isClicked ? 0.5 : 1 }} disabled={isClicked}>
          Click here
        </button>
      </form>
      <ToastContainer />
    </div>
  );
}

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: '#f2f2f2',
    padding: '20px',
    borderRadius: '10px',
  },
  input: {
    width: '300px',
    padding: '10px',
    marginBottom: '10px',
    borderRadius: '5px',
    border: '1px solid #ccc',
  },
  button: {
    padding: '10px 20px',
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
};

export default Reservationtwomain;
