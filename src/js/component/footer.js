/********************************************************************************/
/* Fecha Creación:  23 Marzo 2021.                                              */
/* Autor:           Iván Fonseca Castro                                         */
/*                                                                              */
/* Descripción:     Componente principal para renderizar el Pie de Página.      */
/********************************************************************************/

import React, { Component } from "react";

export const Footer = () => (
	<footer className="footer mt-auto py-3 text-center text-white">
		<div className="row mt-5">
			<div className="col">
				<p>Copyright © - Star Wars Blog</p>
			</div>
			<div className="col">
				<p>Design by Iván Fonseca Castro</p>
			</div>
		</div>
	</footer>
);
