import React from 'react';


const Card = () => {
  return (
    <div className="card mx-4" style={{ width: "28rem", display: "inline-block" }}>
      <img className="card-img-top" width="200px" height="400px" src="https://snr.unl.edu/images/portrait-large/staff/whiteblank.gif" alt="Card image cap" />
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text text-wrap">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <div className="d-flex justify-content-around align-items-center">
          <a href="#" className="btn btn-primary ">Go somewhere</a>
          <button>
            <i className="fas fa-heart "></i>
          </button>

        </div>

      </div>
    </div>
  )
}




export default Card;