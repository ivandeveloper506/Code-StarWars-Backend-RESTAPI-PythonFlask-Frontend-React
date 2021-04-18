/********************************************************************************/
/* Fecha Creación:  23 Marzo 2021.                                              */
/* Autor:           Iván Fonseca Castro                                         */
/*                                                                              */
/* Descripción:     Componente principal para renderizar las opciones del Menú. */
/********************************************************************************/

import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import DropdownItem from "./dropdown-item";
import { Context } from "../store/appContext";
import "../../styles/index.scss";

export default function AvatarLoginUser() {
	const { store, actions } = useContext(Context);

	return store.userLogged ? (
		<div className="mr-4">
			<div className="row">
				<div>
					{/* Invoca el componente que permite crear la lista de items. */}
					<DropdownItem />
				</div>
				<div className="ml-3">
					<p>IF</p>
				</div>
			</div>
		</div>
	) : (
		<div className="mr-3">
			<NavLink to="/login">
				<button type="button" className="btn btn-danger">
					Iniciar sesión
				</button>
			</NavLink>
		</div>
	);
}
