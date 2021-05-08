import React from 'react'
import logo from './image/logo.png'

function Logo() {
    return(
//display of image, position, height and weigth

      <div className="app">
         <img src={logo} alt="logo view" height={100} width={300} className="center" />
       </div>
    )
};

export default Logo;