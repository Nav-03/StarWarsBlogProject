import React from 'react';


const Card = ()=> {
    return (
    <div className="card mx-4" style={{width: "18rem" , display:"inline-block"}}>
  <img className="card-img-top" width="100px" height="200px" src="https://snr.unl.edu/images/portrait-large/staff/whiteblank.gif" alt="Card image cap"/>
  <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <p className="card-text text-wrap">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" className="btn btn-primary">Go somewhere</a>
    <i className="fas fa-heart"></i>
  </div>
</div>
    )
}




export default Card;