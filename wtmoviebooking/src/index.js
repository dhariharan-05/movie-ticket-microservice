import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
 
        <BrowserRouter>
          <App />
        </BrowserRouter>


)
// ReactDOM.render(  <App />
//     // <React.StrictMode><BrowserRouter>
//     // <App />
//     // </BrowserRouter></React.StrictMode>

// , document.getElementById('root'));
