import React, { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

import "../../styles/demo.css";


 const CharacterDetails = () => {
	const { store, actions } = useContext(Context);
  const params = useParams();

  console.log("I need to render the planet ", params.char_id)
  const myCharacter = store.characters.find(c => c.uid === params.char_id)
  if(myCharacter === null || myCharacter === undefined) {
    return <img className="fixed mx-auto" src="https://media0.giphy.com/media/hL9q5k9dk9l0wGd4e0/giphy.gif?cid=ecf05e47r4ep5pv335o8gr49buhwlwyka7f9xfiry4djfaja&rid=giphy.gif&ct=g" />
  }
	return (
		<div className="card mb-3" style={{maxWidth:"100%"}}>
  <div className="row g-0">
    <div className="col-md-4">
      <img src="https://petpress.net/wp-content/uploads/2020/03/star-wars-cat-names.jpg" className="img-fluid rounded-start" alt="..."/>
    </div>
    <div className="col-md-8 text-center">
      <div className="card-body px-5">
        <h5 className="card-title">{myCharacter.name}</h5>
        <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
      </div>
    </div>
  </div>
</div>
	);
};

export default CharacterDetails;





