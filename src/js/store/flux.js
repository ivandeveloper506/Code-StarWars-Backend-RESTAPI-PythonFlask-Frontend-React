const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			peoples: [],
			planets: [],
			vehicles: [],
			favorites: []
		},
		actions: {
			loadPeoples: async () => {
				// Se obtiene la variable del localStorage
				let localStoragePeoples = localStorage.getItem("peoplesAPI");

				if (localStoragePeoples === null || localStoragePeoples === undefined) {
					// Si localStorage NO existe, entonces se cargan los datos de la API.
					const url = "https://swapi.dev/api/people/";
					const response = await fetch(url);
					const data = await response.json();
					setStore({ peoples: data.results });

					localStorage.setItem("peoplesAPI", JSON.stringify(data.results));
				} else {
					// Si localStorage SI existe, entonces se cargan los datos de la variable local, para no volver a realizar Request.
					setStore({ peoples: JSON.parse(localStoragePeoples) });
				}
			},
			loadPlanets: async () => {
				// Se obtiene la variable del localStorage
				let localStoragePlanets = localStorage.getItem("planetsAPI");

				if (localStoragePlanets === null || localStoragePlanets === undefined) {
					// Si localStorage NO existe, entonces se cargan los datos de la API.
					const url = "https://swapi.dev/api/planets/";
					const response = await fetch(url);
					const data = await response.json();
					setStore({ planets: data.results });

					localStorage.setItem("planetsAPI", JSON.stringify(data.results));
				} else {
					// Si localStorage SI existe, entonces se cargan los datos de la variable local, para no volver a realizar Request.
					setStore({ planets: JSON.parse(localStoragePlanets) });
				}
			},
			loadVehicles: async () => {
				// Se obtiene la variable del localStorage
				let localStorageVehicles = localStorage.getItem("vehiclesAPI");

				if (localStorageVehicles === null || localStorageVehicles === undefined) {
					// Si localStorage NO existe, entonces se cargan los datos de la API.
					const url = "https://swapi.dev/api/vehicles/";
					const response = await fetch(url);
					const data = await response.json();
					setStore({ vehicles: data.results });

					localStorage.setItem("vehiclesAPI", JSON.stringify(data.results));
				} else {
					// Si localStorage SI existe, entonces se cargan los datos de la variable local, para no volver a realizar Request.
					setStore({ vehicles: JSON.parse(localStorageVehicles) });
				}
			},
			addFavorite: favoriteParam => {
				// Esta función permite agregar elementos a la lista de favoritos
				const store = getStore();
				let newFavorite = store.favorites;

				favoriteParam = favoriteParam[0];

				// Esta variable permite validar si el elemento ya fue agregado como favorito.
				let existsFavorite = newFavorite.filter(item => item.name == favoriteParam.name);

				if (existsFavorite.length === 0) {
					// Si no existe como favorito, se agrega
					newFavorite.push(favoriteParam);

					setStore({ favorites: newFavorite });
				}
			},
			deleteFavorite: favoriteParam => {
				// Esta función permite eliminar elementos de la lista de favoritos
				setStore({ favorites: favoriteParam });
			}
		}
	};
};

export default getState;
