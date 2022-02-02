import React, {useContext, useEffect} from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import Card from "../component/Card.js";
import { Context } from "../store/appContext";

export const Home = (props) => {
	const { store, actions} = useContext(Context);
	console.log("these are the favorites", store)
	return <>
		<p className="font-weight-bold display-4 ">Characters</p>
		<div className="horizontalScroll my-4">
			{store.characters.map((c)=><Card entity={c} isFavorite={store.favorites.find(fav => fav.name === c.name)}/>)}
		</div>


		<p className="font-weight-bold display-4 text-left">Planets</p>
		<div className="horizontalScroll my-4">
			{store.planets.map(p => <Card entity={p} isFavorite={store.favorites.find(fav => fav.name === p.name)} />)}
		</div>
	</>
}
