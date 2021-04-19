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

	const userEdit = () => {
		console.log("*** Editar Usuario ***");
	};

	const CustomToggle = React.forwardRef(({ children, onClick }, ref) => (
		<a
			href=""
			ref={ref}
			onClick={e => {
				e.preventDefault();
				onClick(e);
			}}>
			{children}
		</a>
	));

	return (
		<div>
			<Dropdown>
				<Dropdown.Toggle as={CustomToggle} id="dropdown-custom-components">
					<img
						className="avatar-image-menu-class rounded-circle"
						src={
							store.userProfile.user_image || store.userProfile.user_image === ""
								? NoImageUser
								: store.userProfile.user_image
						}
						alt="Image profile"
					/>
				</Dropdown.Toggle>

				<Dropdown.Menu>
					<div className="d-flex justify-content-center m-2">
						<img
							className="avatar-image-info-class rounded-circle"
							src={
								store.userProfile.user_image || store.userProfile.user_image === ""
									? NoImageUser
									: store.userProfile.user_image
							}
							alt="Image profile"
						/>
					</div>
					<div className="d-flex justify-content-center dropdown-avatar-class mt-2">
						<h6>
							{store.userProfile.name +
								" " +
								store.userProfile.first_surname +
								" " +
								store.userProfile.second_surname}
						</h6>
					</div>
					<div className="d-flex justify-content-center">
						<p>{store.userProfile.email}</p>
					</div>
					<Dropdown.Item eventKey="1">
						<div onClick={() => userEdit()}>
							<i className="fas fa-cog" aria-hidden="true" />
							&nbsp;&nbsp;Editar perfil
						</div>
					</Dropdown.Item>
					<Dropdown.Divider />
					<Dropdown.Item eventKey="2">
						<div onClick={() => logout()}>
							<i className="fas fa-sign-out-alt" aria-hidden="true" />
							&nbsp;&nbsp;Cerrar sesión
						</div>
					</Dropdown.Item>
				</Dropdown.Menu>
			</Dropdown>
		</div>
	);
}
