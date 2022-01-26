import React, { useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./views/home";
import CharacterDetails from "./views/CharacterDetails";
import { Single } from "./views/single";
import injectContext from "./store/appContext";

import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";

//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";
	const [favorites, setFavorites] = useState([
		{ name: "Luke Skywalker" },
		{ name: "r2d2" }
	]);
	const [characters, setCharacters] = useState([
		{ name: "Luke Skywalker" },
		{ name: "r2d2" }
	]);




	return (
		<div>
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					<Navbar favorites={favorites}
						deleteFavorite={(fav) => setFavorites(favorites.filter(f => f.name !== fav.name))} />
					<Switch>
						<Route exact path="/">
							<Home favorites={favorites}
								characters={characters} />
						</Route>
						<Route exact path="/CharacterDetails">
							<characters favorites={favorites}/>
						</Route>
						<Route exact path="/single/:theid">
							<Single />
						</Route>
						<Route>
							<h1>Not found!</h1>
						</Route>
					</Switch>
					<Footer />
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);








