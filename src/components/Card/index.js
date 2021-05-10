import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Card/partnerships.jpeg';
//import image from '../Circle/image/fathersons.jpeg';

//mport image from '../Circle/image'
//import image from '../Circle/image/allhandsonboard.jpeg'


function Card() {
    return (


<>
    
<br />
<br />
<br />
<hr />

{/* first card represents trainings */}

<div className="row row-cols-1 row-cols-md-4 g-4">
  <div classNames="col">
    <div className="card h-100">
      <img src='../Card/partnerships.jpeg' className="card-img-top" alt="..."></img>
      <div className="card-body">
        <h5 className="card-title">Families</h5>
        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
      <div className="card-footer">
        <small className="text-muted">Last updated 3 mins ago</small>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card h-100">
      <img src='../image/armraised.jpeg' className="card-img-top" alt="..."></img>
      <div className="card-body">
        <h5 className="card-title">Partnerships</h5>
        <p className="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
      </div>
      <div className="card-footer">
        <small className="text-muted">Last updated 3 mins ago</small>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card h-100">
      <img src='../image/familygroup.jpeg' className="card-img-top" alt="..."></img>
      <div className="card-body">
        <h5 className="card-title">Policy</h5>
        <p className="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
      </div>
      <div className="card-footer">
        <small className="text-muted">Last updated 3 mins ago</small>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card h-100">
      <img src='../image/womenattable.jpeg' className="card-img-top" alt="..."></img>
      <div className="card-body">
        <h5 className="card-title">Advocacy</h5>
        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
      </div>
      <div className="card-footer">
        <small className="text-muted">Last updated 3 mins ago</small>
      </div>
    </div>
  </div>
</div>


</>   
    
    )
}


export default Card;