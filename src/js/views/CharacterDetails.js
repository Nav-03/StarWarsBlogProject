import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";



import "../../styles/demo.css";


 const CharacterDetails = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="card mb-3" style={{maxWidth:"100%"}}>
  <div className="row g-0">
    <div className="col-md-4">
      <img src="https://petpress.net/wp-content/uploads/2020/03/star-wars-cat-names.jpg" className="img-fluid rounded-start" alt="..."/>
    </div>
    <div className="col-md-8 text-center">
      <div className="card-body px-5">
        <h5 className="card-title">CHARACTER NAME</h5>
        <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
      </div>
    </div>
  </div>
</div>
	);
};

export default CharacterDetails;





