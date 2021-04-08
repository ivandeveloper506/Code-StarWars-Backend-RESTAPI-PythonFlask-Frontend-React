/********************************************************************************/
/* Fecha Creación:  23 Marzo 2021.                                              */
/* Autor:           Iván Fonseca Castro                                         */
/*                                                                              */
/* Descripción:     Componente principal para renderizar las opciones del Menú. */
/********************************************************************************/

import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { DropdownButton } from "react-bootstrap";
import { Dropdown } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { ButtonGroup } from "react-bootstrap";

export default function DropdownItem() {
	const { store, actions } = useContext(Context);

	const deleteFavorite = deleteItem => {
		actions.deleteFavorite(store.favorites.filter(item => item.name !== deleteItem));
	};

	return (
		<Dropdown as={ButtonGroup}>
			<Button variant="primary">
				<h5>
					Favorites <span className="badge badge-warning">{store.favorites.length}</span>
				</h5>
			</Button>
			<Dropdown.Toggle split variant="warning" id="dropdown-custom-2" />
			<Dropdown.Menu>
				{store.favorites.length === 0 ||
				store.favorites.length === null ||
				store.favorites.length === undefined ? (
					<Dropdown.Item eventKey={0} className="dropdown-item-class">
						{"(Empty)"}
					</Dropdown.Item>
				) : (
					store.favorites.map((item, index) => {
						return (
							<div key={index}>
								<Dropdown.Item eventKey={index} className="dropdown-item-class">
									<div className="row">
										<div className="col-10" onClick={() => deleteFavorite(item.name)}>
											{item.name}
										</div>
										<div className="col-2">
											<i className="fas fa-trash" onClick={() => deleteFavorite(item.name)} />
										</div>
									</div>
								</Dropdown.Item>
							</div>
						);
					})
				)}
			</Dropdown.Menu>
		</Dropdown>
	);
}
