/********************************************************************************/
/* Fecha Creación:  23 Marzo 2021.                                              */
/* Autor:           Iván Fonseca Castro                                         */
/*                                                                              */
/* Descripción:     Vista principal que permite renderizar todas las Cards      */
/*                  del objeto Vehicles.                                        */
/********************************************************************************/

import React, { useContext, useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import "../../styles/index.scss";
import { Context } from "../store/appContext";
import VehicleCard from "./vehicle-card.js";
import VehicleCardImage from "../../img/vehicle-card-image.jpg";

export default function ShowVehicleCard() {
	const { store, actions } = useContext(Context);
	const [searchVehicle, setSearchVehicle] = useState("");
	const inputRef = useRef(null);

	useEffect(() => {
		inputRef.current.focus();
	}, []);

	return (
		<div>
			<div className="container topCardClass" />
			<div className="container mt-3">
				<input
					ref={inputRef}
					onChange={event => {
						setSearchVehicle(event.target.value);
					}}
					type="text"
					className="form-control"
					placeholder="Search vehicle..."
					aria-label="Search Vehicle"
					name="SearchVehicle"
					id="SearchVehicle"
				/>
				<div className="row d-flex-row flex-nowrap overflow-auto mt-3">
					{store.vehicles
						.filter(value => {
							if (searchVehicle === "") {
								return value;
							} else if (value.name.toLowerCase().includes(searchVehicle.toLowerCase())) {
								return value;
							}
						})
						.map((item, index) => {
							return (
								<div key={index} className="col-lg-4 mb-5">
									<VehicleCard
										key={index}
										cardId={index}
										alt={item.name}
										name={item.name}
										model={item.model.charAt(0).toUpperCase() + item.model.slice(1)}
										vehicle_class={
											item.vehicle_class.charAt(0).toUpperCase() + item.vehicle_class.slice(1)
										}
										passengers={item.passengers}
										buttonUrl="/vehicle-card-detail/"
										buttonLabel="Learn More!"
										imageUrl={VehicleCardImage}
									/>
								</div>
							);
						})}
				</div>
			</div>
		</div>
	);
}
