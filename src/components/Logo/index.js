import React from 'react'
import logo from './logo.png';


function Logo() {
    return(
//display of image, position, height and weigth
//adding spaces and a horizontal line for separation
<>
      <div className="app">
        <br />
        <br />
        <br />
        <hr />
       <img src={logo} alt="logo view" height={175} width={400} />
    </div>

    <div>
        <img src='https://images.pexels.com/photos/6190858/pexels-photo-6190858.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940' width='250' />
        <img src='https://images.pexels.com/photos/4546144/pexels-photo-4546144.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940' width='200' />
        <img src='https://images.pexels.com/photos/3704379/pexels-photo-3704379.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500' width='150' />
        <img src='https://images.pexels.com/photos/4400973/pexels-photo-4400973.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500' width='300' />
        <img src='https://images.pexels.com/photos/5211439/pexels-photo-5211439.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500' width='250' />
        <img src='https://images.pexels.com/photos/1320701/pexels-photo-1320701.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500' width='225' />

        <img src='https://images.pexels.com/photos/4546025/pexels-photo-4546025.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500' width='300' />

        <img src='https://images.pexels.com/photos/5905866/pexels-photo-5905866.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260' width='280' />
        <img src='https://images.pexels.com/photos/6698318/pexels-photo-6698318.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940' width='350' />
        {/* <img src='https://images.pexels.com/photos/5211439/pexels-photo-5211439.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500' width='250' /> */}
    </div>

    <div className="app">
        <br />
        <br />
        <br />
        <hr />
    </div>
       
</>
    

    )
};





export default Logo;

