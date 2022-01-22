import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import Card from "../component/Card.js";


export const Home = (props) => (
	<>
		<p className="font-weight-bold display-4 ">Characters</p>
		<div className="horizontalScroll my-4">
			{props.characters.map((c)=><Card isFavorite={props.favorites.find(fav => fav.name === c.name)}/>)}
		

		</div>


		<p className="font-weight-bold display-4 text-left">Planets</p>
		<div className="horizontalScroll my-4">
			<Card />
	
	

		</div>
	</>


);
