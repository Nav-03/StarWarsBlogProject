import React from "react";
import { Link } from "react-router-dom";

export const Navbar = (props) => {




	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<Link to="/">
				<span className="navbar-brand mx-3 h1">LOGO</span>
			</Link>
			<div className="dropdown">
  <button className="btn btn-primary dropdown-toggle mx-5" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
    Favorites {props.favorites.length}
  </button>
  <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
    {props.favorites.map(f=><li><a className="dropdown-item" href="#">{f.name}</a><i  onClick={()=>props.deleteFavorite(f)} className="fas fa-trash"></i></li>)}
 
  </ul>
</div>
		</nav>
	);
};
