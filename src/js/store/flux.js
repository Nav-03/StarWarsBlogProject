const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			favorites: [],
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
				},
				{
					name: "Tatooine 2",
					rotation_period: "23",
					orbital_period: "304",
					diameter: "10465",
					climate: "arid",
					population: "200000",
				}
			],
		},
		actions: {
			loadPlanets: async () => {

				const response = await fetch('https://www.swapi.tech/api/planets');
				if(response.status === 200){
					const payload = await response.json();
					const myModifiedPlanets = payload.results.map(p => {
						p.type = "planet";
						return p;
					})
					setStore({ planets: myModifiedPlanets });
				}
			},
			addFavorites: (entity) => {
				const store = getStore();
				const newFavorite = [ ...store.favorites, entity ];
				setStore({ favorites: newFavorite });
				
			},
			deleteFavorite: (favorite) => {
				const store = getStore();
				console.log("this is what I pretend to delete", favorite);
				setStore({
					favorites: store.favorites.filter(item => favorite.name !== item.name)
				})
				console.log("finish deleting the favorite");

			}
		}
	};
};

export default getState;
