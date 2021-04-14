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
		<div className="container mt-5">
			<div className="row d-flex flex-row align-items-center justify-content-center">
				<h1>Página de Registro</h1>
			</div>
		</div>
	);
}
