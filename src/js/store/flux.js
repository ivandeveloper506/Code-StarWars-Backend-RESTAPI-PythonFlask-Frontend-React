import Swal from "sweetalert2";

const baseUrlAPI = "https://3000-blush-mosquito-p87aojen.ws-us03.gitpod.io/api";

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
							Swal.fire({
								position: "top-end",
								icon: "error",
								text: "Ocurrio un error al tratar de recuperar los datos del perfil de usuario.",
								showConfirmButton: false,
								timerProgressBar: true,
								timer: 1500
							});
						}
					})
					.then(data => {
						setStore({ userProfile: data });
					})
					.catch(error => {
						Swal.fire({
							position: "top-end",
							icon: "error",
							text: "Ocurrio un error al tratar de recuperar los datos del perfil de usuario.",
							showConfirmButton: false,
							timerProgressBar: true,
							timer: 1500
						});
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
							Swal.fire({
								position: "top-end",
								icon: "error",
								text: "Ocurrio un error al tratar de recuperar los datos de los favoritos.",
								showConfirmButton: false,
								timerProgressBar: true,
								timer: 1500
							});
						}
					})
					.then(data => {
						setStore({ favorites: data });
					})
					.catch(error => {
						Swal.fire({
							position: "top-end",
							icon: "error",
							text: "Ocurrio un error al tratar de recuperar los datos de los favoritos.",
							showConfirmButton: false,
							timerProgressBar: true,
							timer: 1500
						});
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
							Swal.fire({
								position: "top-end",
								icon: "error",
								text: "Ocurrio un error al tratar de agregar el favorito.",
								showConfirmButton: false,
								timerProgressBar: true,
								timer: 1500
							});
						} else {
							getActions().getFavorite(userId);
						}
					})
					.catch(error => {
						Swal.fire({
							position: "top-end",
							icon: "error",
							text: "Ocurrio un error al tratar de agregar el favorito.",
							showConfirmButton: false,
							timerProgressBar: true,
							timer: 1500
						});
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
							Swal.fire({
								position: "top-end",
								icon: "error",
								text: "Ocurrio un error al tratar de eliminar el favorito.",
								showConfirmButton: false,
								timerProgressBar: true,
								timer: 1500
							});
						}
					})
					.catch(error => {
						Swal.fire({
							position: "top-end",
							icon: "error",
							text: "Ocurrio un error al tratar de eliminar el favorito.",
							showConfirmButton: false,
							timerProgressBar: true,
							timer: 1500
						});
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

							Swal.fire({
								position: "top-end",
								icon: "success",
								text: "¡La sesión ha sido iniciada exitosamente!",
								showConfirmButton: false,
								timerProgressBar: true,
								timer: 1500
							});

							return response.json();
						} else {
							Swal.fire({
								position: "top-end",
								icon: "error",
								text: "Ocurrio un error al tratar de iniciar sesión.",
								showConfirmButton: false,
								timerProgressBar: true,
								timer: 1500
							});
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
						Swal.fire({
							position: "top-end",
							icon: "error",
							text: "Ocurrio un error al tratar de iniciar sesión.",
							showConfirmButton: false,
							timerProgressBar: true,
							timer: 1500
						});
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
							Swal.fire({
								position: "top-end",
								icon: "success",
								text: "¡La cuenta ha sido creada exitosamente!",
								showConfirmButton: false,
								timerProgressBar: true,
								timer: 1500
							});

							// Se logró registrar correctamente, se llama inmediatamente a que se loguee de una vez
							getActions().login(userBody.email, userBody.password);

							return response.json();
						} else {
							Swal.fire({
								position: "top-end",
								icon: "error",
								text: "Ocurrio un error al tratar de crear la cuenta.",
								showConfirmButton: false,
								timerProgressBar: true,
								timer: 1500
							});
						}
					})
					.catch(error => {
						Swal.fire({
							position: "top-end",
							icon: "error",
							text: "Ocurrio un error al tratar de crear la cuenta.",
							showConfirmButton: false,
							timerProgressBar: true,
							timer: 1500
						});
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
