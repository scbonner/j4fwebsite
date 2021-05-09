import React from 'react'
import logo from '../image/logo.png';
import './App.css'
// import { ReactTinyLink } from 'react-tiny-link'
// import {
//     BrowserRouter as Router,
//     Switch,
//     Route,
//     navLinks,
//     Link,
//     useParams
//   } from "react-router-dom";




function Logo() {

    return(
//display of image, position, height and weigth

      <div className="app">
<br />
<br />
<br />
<br />
<hr />
         <img src={logo} alt="logo view" height={100} width={300} />
    
       <div>

       <>
        <div>
        <div className="circle1">
            <p className="text">Circle text</p>
        </div>
            {/* <p>Barre is distinguished from fitness</p>
            <p> activities by its use</p>
            <p> of the ballet barre and </p><p>incorporation of movements derived from ballet.</p>
            <p>The classical dance movements and positions are derived from yoga and pilates</p> */}
        <div className="circle2">
            <p className="text">Circle text</p>
        </div>
        <div className="circle3">
            <p className="text">Circle text</p>
        </div>
        <div className="circle4">
            <p className="text">Circle text</p>
        </div>
        </div>
</>
       {/* <ReactTinyLink
            cardSize="small"
            minLine={1}
            url="https://www.justice4families.org"
          /> */}
       </div>
    </div>

    )
};

// 




export default Logo;

