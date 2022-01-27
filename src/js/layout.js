import React, { useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./views/home";
import CharacterDetails from "./views/CharacterDetails";
<<<<<<< HEAD
import PlanetDetails from "./views/PlanetDetails";
=======
import PlanetDetails from "./views/CharacterDetails";
>>>>>>> a5108cc826a51128b1cf78ebac3de9e93cf9f97a
import injectContext from "./store/appContext";

import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";

//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div>
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					<Navbar />
					<Switch>
						<Route exact path="/">
							<Home />
						</Route>
<<<<<<< HEAD
						<Route exact path="/people/:char_id">
=======
						<Route exact path="/character/:char_id">
>>>>>>> a5108cc826a51128b1cf78ebac3de9e93cf9f97a
							<CharacterDetails />
						</Route>
						<Route exact path="/planet/:planet_id">
							<PlanetDetails />
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








