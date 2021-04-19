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

import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/index.scss";

export default function HomePage() {
	const { store, actions } = useContext(Context);

	return store.userLogged ? (
		<div className="container homePageClass">
			<div className="row d-flex flex-row align-items-center justify-content-center homePageTitleClass">
				<h1>Star Wars Blog</h1>
			</div>
			<div className="row d-flex flex-row align-items-center justify-content-center mt-5 homePageTitleClass">
				<p>¡Juntos dominaremos la Galaxia!</p>
			</div>
		</div>
	) : (
		<div className="container homePageClass">
			<div className="row d-flex flex-row align-items-center justify-content-center homePageTitleClass">
				<h1>Bienvenido a Star Wars Blog</h1>
			</div>
			<div className="row d-flex flex-row align-items-center justify-content-center mt-5 homePageTitleClass">
				<p>¡Únete y juntos dominaremos la Galaxia!</p>
			</div>

			<div className="row d-flex flex-row align-items-center justify-content-center mt-5">
				<div className="row d-flex flex-row align-items-center justify-content-center mt-5" />
				<Link to="/register">
					<button type="button" className="btn btn-outline-warning btn-lg button-join-class">
						SIII!, QUIERO UNIRME
					</button>
				</Link>
			</div>
		</div>
	);
}
