const getState = ({ getStore, getActions, setStore }) => {
	return {
	  store: {
		favorites: [],
		characters: [],
		planets: [],
		images: {
			"planet1":"https://upload.wikimedia.org/wikipedia/en/6/6d/Tatooine_%28fictional_desert_planet%29.jpg"
		},
	  },
	  actions: {
		loadPlanets: async () => {
		  const response = await fetch("https://www.swapi.tech/api/planets");
		  if (response.status === 200) {
			const payload = await response.json();
			const myModifiedPlanets = await Promise.all (payload.results.map(async(p) => {
			  const planetDetails = await fetch(p.url);
			  if (planetDetails.status === 200) {
				  
				  const pDetailsPayload = await planetDetails.json();
				  let planet = pDetailsPayload.result.properties
				  planet.type = "planets"
				  console.log(planet)
				  return planet;}
			
			}));
			setStore({ planets: myModifiedPlanets });
		  }
		},
		loadCharacters: async () => {
		  const response = await fetch("https://www.swapi.tech/api/people");
		  if (response.status === 200) {
			const payload = await response.json();
			const myModifiedCharacters = await Promise.all (payload.results.map(async(c) => {
				const charDetails = await fetch(c.url);
			  if (charDetails.status === 200) {
			  
				  const cDetailsPayload = await charDetails.json();
				  let char = cDetailsPayload.result.properties
			  char.type = "people";
			  return char;}
			}));
			setStore({ characters: myModifiedCharacters });
		  }
		},
		addFavorites: (entity) => {
		  const store = getStore();
		  const newFavorite = [...store.favorites, entity];
		  setStore({ favorites: newFavorite });
		},
		deleteFavorite: (favorite) => {
		  const store = getStore();
		  console.log("this is what I pretend to delete", favorite);
		  setStore({
			favorites: store.favorites.filter(
			  (item) => favorite.name !== item.name
			),
		  });
		  console.log("finish deleting the favorite");
		
		},
	  },
	};
  };
  
  export default getState;
  