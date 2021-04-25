const baseUrlAPI = "https://3000-silver-wombat-ydhlr983.ws-us03.gitpod.io/api";

const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			peoples: [],
			planets: [],
			vehicles: [],
			favorites: [],
			userProfile: [],
			userLogged: false,
			activeOption: ""
		},
		actions: {
			loadPeoples: async () => {
				// Se obtiene la variable del localStorage
				let localStoragePeoples = localStorage.getItem("peoplesAPI");

				if (localStoragePeoples === null || localStoragePeoples === undefined) {
					// Si localStorage NO existe, entonces se cargan los datos de la API.
					const url = `${baseUrlAPI}/peoples`;
					const response = await fetch(url);
					const data = await response.json();

					setStore({ peoples: data });

					localStorage.setItem("peoplesAPI", JSON.stringify(data));
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
					const url = `${baseUrlAPI}/planets`;
					const response = await fetch(url);
					const data = await response.json();
					setStore({ planets: data });

					localStorage.setItem("planetsAPI", JSON.stringify(data));
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
					const url = `${baseUrlAPI}/vehicles`;
					const response = await fetch(url);
					const data = await response.json();
					setStore({ vehicles: data });

					localStorage.setItem("vehiclesAPI", JSON.stringify(data));
				} else {
					// Si localStorage SI existe, entonces se cargan los datos de la variable local, para no volver a realizar Request.
					setStore({ vehicles: JSON.parse(localStorageVehicles) });
				}
			},
			getProfileUser: async userID => {
				await fetch(`${baseUrlAPI}/users/${userID}`, {
					method: "GET",
					headers: {
						"Content-Type": "application/json",
						Authorization: `Bearer ${localStorage.getItem("x-access-token")}`
					}
				})
					.then(response => {
						if (response.status === 200) {
							return response.json();
						} else {
							alert("DANGER - Ha ocurrido un error al tratar de recuperar los datos del usuario.");
						}
					})
					.then(data => {
						setStore({ userProfile: data });
					})
					.catch(error => {
						alert("DANGER - Ha ocurrido un error al tratar de recuperar los datos del usuario.");
					});
			},
			getFavorite: async userID => {
				await fetch(`${baseUrlAPI}/favorites/${userID}`, {
					method: "GET",
					headers: {
						"Content-Type": "application/json",
						Authorization: `Bearer ${localStorage.getItem("x-access-token")}`
					}
				})
					.then(response => {
						if (response.status === 200) {
							return response.json();
						} else {
							alert("DANGER - Ha ocurrido un error al tratar de recuperar los datos de favoritos.");
						}
					})
					.then(data => {
						setStore({ favorites: data });
					})
					.catch(error => {
						alert("DANGER - Ha ocurrido un error al tratar de recuperar los datos de favoritos,");
					});
			},
			storeFavorite: async (userId, name, favoriteId, favoriteType) => {
				const body = {
					user_id: userId,
					name: name,
					favorite_id: favoriteId,
					favorite_type: favoriteType
				};

				await fetch(`${baseUrlAPI}/favorites`, {
					method: "POST",
					body: JSON.stringify(body),
					headers: {
						"Content-Type": "application/json",
						Authorization: `Bearer ${localStorage.getItem("x-access-token")}`
					}
				})
					.then(response => {
						if (response.status != 201) {
							alert("DANGER[response] - Ha ocurrido un error al tratar crear el favorito.");
						} else {
							getActions().getFavorite(userId);
						}
					})
					.catch(error => {
						alert("DANGER[error] - Ha ocurrido un error al tratar crear el favorito.");
					});
			},
			delFavorite: async favoriteId => {
				await fetch(`${baseUrlAPI}/favorites/${favoriteId}`, {
					method: "DELETE",
					headers: {
						Authorization: `Bearer ${localStorage.getItem("x-access-token")}`
					}
				})
					.then(response => {
						if (response.status != 200) {
							alert("DANGER[response] - Ha ocurrido un error al tratar eliminar el favorito.");
						}
					})
					.catch(error => {
						alert("DANGER[error] - Ha ocurrido un error al tratar eliminar el favorito.");
					});
			},
			addFavorite: (favoriteParam, userId, favoriteType) => {
				// Esta función permite agregar elementos a la lista de favoritos
				const store = getStore();
				let newFavorite = store.favorites;

				favoriteParam = favoriteParam[0];

				// Esta variable permite validar si el elemento ya fue agregado como favorito.
				let existsFavorite = newFavorite.filter(item => item.name == favoriteParam.name);

				if (existsFavorite.length === 0) {
					// Se almacena el favorito en la base de datos
					getActions().storeFavorite(userId, favoriteParam.name, favoriteParam.id, favoriteType);
				}
			},
			deleteFavorite: (favoriteParam, favoriteId) => {
				// Esta función permite eliminar elementos de la lista de favoritos

				setStore({ favorites: favoriteParam });

				// Se elimina el favorito en la base de datos
				getActions().delFavorite(favoriteId.id);
			},
			login: async (email, password) => {
				const body = {
					email: email,
					password: password
				};

				await fetch(`${baseUrlAPI}/users/login`, {
					method: "POST",
					body: JSON.stringify(body),
					headers: {
						"Content-Type": "application/json"
					}
				})
					.then(response => {
						if (response.status === 200) {
							setStore({ userLogged: true });

							return response.json();
						} else {
							alert("DANGER - Ha ocurrido un error y no se pudo iniciar sesión");
						}
					})
					.then(data => {
						localStorage.setItem("x-access-token", data.token);

						// Se obtienen los datos del usuario conectado.
						getActions().getProfileUser(data.user_id);

						// Se obtienen los datos de los favoritos del usuario conectado
						getActions().getFavorite(data.user_id);

						getActions().activeOption("/home-page");
					})
					.catch(error => {
						alert("DANGER - Ha ocurrido un error y no se pudo iniciar sesión");
						console.log(error);
					});
			},
			register: async userBody => {
				await fetch(`${baseUrlAPI}/users/register`, {
					method: "POST",
					body: JSON.stringify(userBody),
					headers: {
						"Content-Type": "application/json"
					}
				})
					.then(response => {
						if (response.status === 201) {
							alert("SUCCESS - Usuario registrado satisfactoriamente.");

							// Se logró registrar correctamente, se llama inmediatamente a que se loguee de una vez
							getActions().login(userBody.email, userBody.password);

							return response.json();
						} else {
							alert("DANGER[response] - Ha ocurrido un error al tratar crear el usuario.");
						}
					})
					.catch(error => {
						alert("DANGER[error] - Ha ocurrido un error al tratar crear el usuario.");
					});
			},
			activeOption: option => {
				setStore({ activeOption: option });
			},
			logout: () => {
				setStore({ userLogged: false });
			}
		}
	};
};

export default getState;
