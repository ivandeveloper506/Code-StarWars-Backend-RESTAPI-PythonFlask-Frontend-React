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

import React from "react";
import { Link } from "react-router-dom";
import "../../styles/index.scss";

export default function RegisterPage() {
	return (
		<div className="container-fluid container-register-main-class">
			<div className="row d-flex flex-row align-items-center justify-content-center">
				<div className="col" />
				<div className="col-5 register-main-class">
					<div className="row d-flex flex-row align-items-center justify-content-center mt-3">
						<h1 className="text-white">Registro Nuevo Usuario</h1>
					</div>
					<div>
						<form>
							<div className="m-3">
								<label className="form-label text-white">Nombre</label>
								<input
									type="name"
									className="form-control"
									id="exampleInputName"
									placeholder="Ingrese su nombre..."
									required
								/>
							</div>
							<div className="m-3">
								<label className="form-label text-white">Primer Apellido</label>
								<input
									type="firstSurname"
									className="form-control"
									id="firstSurnameID"
									placeholder="Ingrese su primer apellido..."
									required
								/>
							</div>
							<div className="m-3">
								<label className="form-label text-white">Segundo Apellido</label>
								<input
									type="secondSurname"
									className="form-control"
									id="secondSurnameID"
									placeholder="Ingrese su segundo apellido..."
								/>
							</div>
							<div className="m-3">
								<label className="form-label text-white">Email</label>
								<input
									type="email"
									className="form-control"
									id="exampleInputEmail"
									placeholder="Ingrese su Email..."
									required
								/>
							</div>
							<div className="m-3">
								<label className="form-label text-white">Contraseña</label>
								<input
									type="password"
									className="form-control"
									id="exampleInputPassword1"
									placeholder="Ingrese su contraseña..."
									required
								/>
							</div>
							<div className="m-3">
								<label className="form-label text-white">Usuario</label>
								<input
									type="userName"
									className="form-control"
									id="userNameID"
									placeholder="Ingrese su usuario..."
									required
								/>
							</div>
							<div className="m-3">
								<button type="submit" className="btn btn-danger btn-block">
									Registrar
								</button>
							</div>
						</form>
					</div>
				</div>
				<div className="col" />
			</div>
		</div>
	);
}
