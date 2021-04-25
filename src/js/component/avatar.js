/********************************************************************************/
/* Fecha Creación:  23 Marzo 2021.                                              */
/* Autor:           Iván Fonseca Castro                                         */
/*                                                                              */
/* Descripción:     Componente principal para renderizar las opciones del Menú. */
/********************************************************************************/

import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import { DropdownButton } from "react-bootstrap";
import { Dropdown } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { ButtonGroup } from "react-bootstrap";
import "../../styles/index.scss";
import NoImageUser from "../../img/no-user.jpg";

export default function Avatar() {
	const { store, actions } = useContext(Context);

	const logout = () => {
		actions.logout();
	};

	return (
		<div>
			<button onClick={() => logout()} type="button" className="btn btn-warning">
				Cerrar sesión
			</button>
		</div>
	);
}
