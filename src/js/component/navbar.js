/********************************************************************************/
/* Fecha Creación:  23 Marzo 2021.                                              */
/* Autor:           Iván Fonseca Castro                                         */
/*                                                                              */
/* Descripción:     Componente principal para renderizar el Menú.               */
/********************************************************************************/

import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import { Link, NavLink } from "react-router-dom";
import "../../styles/index.scss";
import DropdownItem from "./dropdown-item";
import { useHistory } from "react-router-dom";
import AvatarLoginUser from "./avatar-login-user";

export const Navbar = () => {
	const { store, actions } = useContext(Context);
	const history = useHistory();

	useEffect(() => {
		if (store.userLogged) {
			history.push("/show-people-card");
		} else {
			history.push("/home-page");
		}
	});

	return (
		<nav className="navbar navbar-light mb-3 fixed-top navbarClass">
			<Link to="/home-page">
				<span className="navbar-brand logo-class text-white mb-0 h1">Star Wars Blog</span>
			</Link>

			<NavLink to="/show-people-card">
				<span className="navbar-brand text-white ml-3 mb-0 h1" activeClassName="active">
					Peoples
				</span>
			</NavLink>
			<NavLink to="/show-planet-card">
				<span className="navbar-brand text-white ml-3 mb-0 h1" activeClassName="active">
					Planets
				</span>
			</NavLink>
			<NavLink to="/show-vehicle-card">
				<span className="navbar-brand text-white ml-3 mb-0 h1" activeClassName="active">
					Vehicles
				</span>
			</NavLink>
			<div className="ml-auto d-flex justify-content-between">
				<div>
					{/* Invoca el componente que permite crear el la opción de iniciar sesión o el avatar */}
					<AvatarLoginUser />
				</div>
			</div>
		</nav>
	);
};
