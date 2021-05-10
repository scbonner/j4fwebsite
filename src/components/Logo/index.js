import React from 'react'
import logo from './logo.png';

// import '../App.css';
// // import { ReactTinyLink } from 'react-tiny-link'
// // import {
// //     BrowserRouter as Router,
//     Switch,
//     Route,
//     navLinks,
//     Link,
//     useParams
//   } from "react-router-dom";


function Logo() {
    return(
//display of image, position, height and weigth
//adding spaces and a horizontal line for separation
      <div className="app">
        <br />
        <br />
        <br />
        <br />
        <br />
        <hr />
       <img src={logo} alt="logo view" height={100} width={300} />
       </div>
       

    

    )
};

// 




export default Logo;

