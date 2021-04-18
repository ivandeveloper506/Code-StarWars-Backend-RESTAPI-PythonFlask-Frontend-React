/********************************************************************************/
/* Fecha Creación:  23 Marzo 2021.                                              */
/* Autor:           Iván Fonseca Castro      ACTUALIZAR                         */
/*                                                                              */
/* Descripción:     Vista principal de componente Card, el componente es        */
/*                  generico y se puede invocar con propiedas [props] y dibujar */
/*                  de acuerdo a los valores de las [props].                    */
/*                  El componente permite renderizar los componentes            */
/*                  Cards de Vehicles.                                          */
/********************************************************************************/

import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import "../../styles/index.scss";

export default function LoginPage() {
	const { store, actions } = useContext(Context);
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	// const handleClick = () => {
	// 	const opts = {
	// 		method: "POST",
	// 		headers: {
	// 			"Content-Type": "application/json"
	// 		},
	// 		body: JSON.stringify({
	// 			email: email,
	// 			password: password
	// 		})
	// 	};

	// 	fetch("https://3000-amber-chickadee-hbabkzx9.ws-us03.gitpod.io/api/users/login", opts)
	// 		.then(resp => {
	// 			if (resp.status === 200) return resp.json();
	// 			else alert("Ha ocurrido un error");
	// 		})
	// 		.then()
	// 		.catch(error => {
	// 			console.error("There was an error!!!", error);
	// 		});
	// };

	const handleLogin = e => {
		e.preventDefault();

		actions.login(email, password);

		// const body = {
		// 	email: email,
		// 	password: password
		// };

		// fetch("https://3000-amber-chickadee-hbabkzx9.ws-us03.gitpod.io/api/users/login", {
		// 	method: "POST",
		// 	body: JSON.stringify(body),
		// 	headers: {
		// 		"Content-Type": "application/json"
		// 	}
		// })
		// 	.then(response => {
		// 		if (response.status === 200) {
		// 			alert("SUCCESS - Ha logrado iniciar sesión correctamente.");
		// 			return response.json();
		// 		} else {
		// 			alert("DANGER - Ha ocurrido un error y no se pudo iniciar sesión");
		// 		}
		// 	})
		// 	.then(data => {
		// 		console.log(data);
		// 		sessionStorage.setItem("my_token", data.token);
		// 	})
		// 	.catch(error => {
		// 		alert("DANGER - Ha ocurrido un error y no se pudo iniciar sesión");
		// 		console.log(error);
		// 	});
	};

	return (
		<div className="container-fluid container-login-main-class">
			<div className="row d-flex flex-row align-items-center justify-content-center">
				<div className="col" />
				<div className="col-5 login-main-class">
					<div className="row d-flex flex-row align-items-center justify-content-center mt-3">
						<h1 className="text-white">Iniciar sesión</h1>
					</div>
					<div>
						<form onSubmit={handleLogin}>
							<div className="m-3">
								<label className="form-label text-white">Email</label>
								<input
									type="email"
									className="form-control"
									id="exampleInputEmail1"
									aria-describedby="emailHelp"
									placeholder="Email"
									required
									value={email}
									onChange={e => setEmail(e.target.value)}
								/>
							</div>
							<div className="m-3">
								<label className="form-label text-white">Contraseña</label>
								<input
									type="password"
									className="form-control"
									id="exampleInputPassword1"
									placeholder="Contraseña"
									required
									value={password}
									onChange={e => setPassword(e.target.value)}
								/>
							</div>
							<div className="m-3">
								<button type="submit" className="btn btn-danger btn-block">
									Ingresar
								</button>
							</div>
							<div className="m-3 form-check">
								<div className="row">
									<div className="col-6">
										<input type="checkbox" className="form-check-input" id="exampleCheck1" />
										<h6>
											<label className="form-check-label text-white">Recuérdame</label>
										</h6>
									</div>

									<div className="col-6">
										<Link to="/register">
											<h6>
												<span className="text-warning">¿No tienes cuenta aún?</span>
											</h6>
										</Link>
									</div>
								</div>

								<div className="mt-3 row d-flex flex-row align-items-center justify-content-center">
									<Link to="/recover">
										<h6>
											<span className="text-warning">
												¡Necesito de la Fuerza para recuperar mi contraseña!
											</span>
										</h6>
									</Link>
								</div>
							</div>
						</form>
					</div>
				</div>
				<div className="col" />
			</div>
		</div>
	);
}
