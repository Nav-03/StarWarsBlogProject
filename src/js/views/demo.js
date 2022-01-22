import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

import "../../styles/demo.css";


export const Demo = () => {
	// const { store, actions } = useContext(Context);

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











// return (
// 	<div classNameName="container">
// 		<ul classNameName="list-group">
// 			{store.demo.map((item, index) => {
// 				return (
// 					<li
// 						key={index}
// 						classNameName="list-group-item d-flex justify-content-between"
// 						style={{ background: item.background }}>
// 						<Link to={"/single/" + index}>
// 							<span>Link to: {item.title}</span>
// 						</Link>
// 						{// Conditional render example
// 						// Check to see if the background is orange, if so, display the message
// 						item.background === "orange" ? (
// 							<p style={{ color: item.initial }}>
// 								Check store/flux.js scroll to the actions to see the code
// 							</p>
// 						) : null}
// 						<button classNameName="btn btn-success" onClick={() => actions.changeColor(index, "orange")}>
// 							Change Color
// 						</button>
// 					</li>
// 				);
// 			})}
// 		</ul>
// 		<br />
// 		<Link to="/">
// 			<button classNameName="btn btn-primary">Back home</button>
// 		</Link>
// 	</div>
// );
// };
