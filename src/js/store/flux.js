const ROOT_URL = "https://swapi.tech/api";
const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			people: [],
			planets: [],
			vehicles: [],
			favorites: {
				people: [],
				vehicles: [],
				planets: [],
			},
		},
		actions: {
			// Use getActions to call a function within a fuction
			getAllPeople: async () => {
				try {
					const response = await fetch(`${ROOT_URL}/people`);
					const data = await response.json();
					setStore({ people: data.results });
				} catch (error) {
					console.log(error);
				}
			},
			getPeopleById: async (id) => {
				try {
					const response = await fetch(`${ROOT_URL}/people/${id}`);
					const data = await response.json();
					return data;
				} catch (error) {
					console.log(error);
				}
			},
			getAllPlanets: async () => {
				try {
					const response = await fetch(`${ROOT_URL}/planets`);
					const data = await response.json();
					setStore({ planets: data.results });
				} catch (error) {
					console.log(error);
				}
			},
			getPlanetById: async (id) => {
				try {
					const response = await fetch(`${ROOT_URL}/planets/${id}`);
					const data = await response.json();
					return data;
				} catch (error) {
					console.log(error);
				}
			},
			getAllVehicles: async () => {
				try {
					const response = await fetch(`${ROOT_URL}/vehicles`);
					const data = await response.json();
					setStore({ vehicles: data.results });
				} catch (error) {
					console.log(error);
				}
			},
			getVehicleById: async (id) => {
				try {
					const response = await fetch(`${ROOT_URL}/vehicles/${id}`);
					const data = await response.json();
					return data;
				} catch (error) {
					console.log(error);
				}
			},
			toggleFavorite: (data, type) => {
				const { favorites } = getStore();
				switch (type) {
					case "people":
						const isPeopleFavorite = favorites.people.find((favorite) => favorite.result.uid === data.result.uid);
						if (isPeopleFavorite) {
							const newFavorites = favorites.people.filter((favorite) => favorite.result.uid !== data.result.uid);
							setStore({ favorites: { ...favorites, people: newFavorites } });
						} else {
							setStore({ favorites: { ...favorites, people: [...favorites.people, data] } });
						}
						break;
					case "vehicles":
						const isVehicleFavorite = favorites.vehicles.find((favorite) => favorite.result.uid === data.result.uid);
						if (isVehicleFavorite) {
							const newFavorites = favorites.vehicles.filter((favorite) => favorite.result.uid !== data.result.uid);
							setStore({ favorites: { ...favorites, vehicles: newFavorites } });
						} else {
							setStore({ favorites: { ...favorites, vehicles: [...favorites.vehicles, data] } });
						}
						break;
					case "planets":
						const isPlanetFavorite = favorites.planets.find((favorite) => favorite.result.uid === data.result.uid);
						if (isPlanetFavorite) {
							const newFavorites = favorites.planets.filter((favorite) => favorite.result.uid !== data.result.uid);
							setStore({ favorites: { ...favorites, planets: newFavorites } });
						} else {
							setStore({ favorites: { ...favorites, planets: [...favorites.planets, data] } });
						}
						break;
					default:
						break;
				}
			},
		},
	};
};

export default getState;