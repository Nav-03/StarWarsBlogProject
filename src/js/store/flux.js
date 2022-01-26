const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			favorites: [
				{
					name: "Luke Skywalker",

				},

			],
			characters: [
				{
					name: "Luke Skywalker",
					height: "172",
					skin_color: "fair",
					eye_color: "blue",
					birth_year: "19BBY",
					gender: "male",
				}
			],
			planets: [
				{
					name: "Tatooine",
					rotation_period: "23",
					orbital_period: "304",
					diameter: "10465",
					climate: "arid",
					population: "200000",
				}
			],
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();


				//reset the global store
				setStore({ demo: demo });
			},
			addFavorites: () => {
				const store = getStore();
				

			}
		}
	};
};

export default getState;
