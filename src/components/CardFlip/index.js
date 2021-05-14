import React from 'react'
import './cardflip.css'

//export default function CardFlip() {
   // return (

/* <>
<br />
<br />
<br /> */


class CardFlip extends React.Component {
  render() {
    return(
        <div>
        <div className="card">
          <img src={this.props.img} />
          <div className="card-body">
            <h2>{this.props.title}</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
            <h5>{this.props.author}</h5>
          </div>
        </div>

        <div className="card">
          <img src={this.props.img} />
          <div className="card-body">
            <h2>{this.props.title}</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
            <h5>{this.props.author}</h5>
          </div>
        </div>
        <div className="card">
          <img src={this.props.img} />
          <div className="card-body">
            <h2>{this.props.title}</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
            <h5>{this.props.author}</h5>
          </div>
        </div>
        <div className="card">
          <img src={this.props.img} />
          <div className="card-body">
            <h2>{this.props.title}</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
            <h5>{this.props.author}</h5>
          </div>
        </div>
        </div>

        
    )
  }
}

class App extends React.Component {
  render() {
    return (
      <>
       <div className="header">
         <h1>React Card Component</h1>
         <h3>A simple and responsive card component in React with clean hover effects. Copy and customise.</h3>
       </div>
      
       <div className='cards'>
         <img src='https://picsum.photos/id/54/400/300'
          title='What I learned from my visit to The Upside Down'
          author='Nancy Wheeler'></img>
      </div>  
      </>
    )
  }
}

export default CardFlip;

{/* class Card extends React.Component {
  render() { */}
    




        {/* <div>
            <section>
                <div className="container">
                    <div className="row">
                        <div className="col-sm-6 col-lg-4">
                            {/* Card Flip */}
                            {/* <div className="card-flip">
                                <div className="flip">
                                    <div className="front"> */} 
                                        {/* front content  */}
                                        {/* <div className="card">
                                        <img className="card-img-top" data-src="holder.js/100px180/" alt="100%x180" height="180px"  width='100%' display="block" data-holder-rendered="true"></img>
                                        <div className="card-block">
                                            <h4 className="card-title">Card Flip</h4>
                                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
                                            {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
                                        {/* </div>
                                    </div>
                                </div>
						     </div>
                                    <div className="back"> */}
                                        {/*  back content */}
                                        {/* <div className="card">
                                            <div className="card-block">
                                                <h4 className="card-title">Built With</h4>
                                                <h6 className="card-subtitle text-muted">The following technologies</h6>
                                            </div>
                                                <img src="https://live.staticflickr.com/4631/38877234845_46716ec03e_b.jpg" alt="[100%x180]" data-holder-rendered="true" height='180px' width='100%' display="lock"></img>
                                        <div className="card-block">
                                                <p className="card-text">
                                                    React Native<br /> 
                                                    Express<br /> 
                                                    MongoDB<br /> 
                                                    Node.js </p>
                                                <p className="card-link">Coming soon!</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div> */}
                            {/*  End Card Flip  */}
                        {/* </div>
                    </div>
            </section>
        </div> */}
    //</>
     

