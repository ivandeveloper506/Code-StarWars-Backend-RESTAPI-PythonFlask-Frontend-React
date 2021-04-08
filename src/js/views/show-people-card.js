/********************************************************************************/
/* Fecha Creación:  23 Marzo 2021.                                              */
/* Autor:           Iván Fonseca Castro                                         */
/*                                                                              */
/* Descripción:     Vista principal que permite renderizar todas las Cards      */
/*                  del objeto Peoples.                                         */
/********************************************************************************/

import React, { useContext, useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import "../../styles/index.scss";
import { Context } from "../store/appContext";
import PeopleCard from "./people-card.js";
import PeopleCardImage from "../../img/people-card-image.jpg";

export default function ShowPeopleCard() {
	const { store, actions } = useContext(Context);
	const [searchPeople, setSearchPeople] = useState("");
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
						setSearchPeople(event.target.value);
					}}
					type="text"
					className="form-control"
					placeholder="Search people..."
					aria-label="Search People"
					name="SearchPeople"
					id="SearchPeople"
				/>
				<div className="row d-flex-row flex-nowrap overflow-auto mt-3">
					{store.peoples
						.filter(value => {
							if (searchPeople === "") {
								return value;
							} else if (value.name.toLowerCase().includes(searchPeople.toLowerCase())) {
								return value;
							}
						})
						.map((item, index) => {
							return (
								<div key={index} className="col-lg-4 mb-5">
									<PeopleCard
										key={index}
										cardId={index}
										alt={item.name}
										title={item.name}
										gender={item.gender.charAt(0).toUpperCase() + item.gender.slice(1)}
										hairColor={item.hair_color.charAt(0).toUpperCase() + item.hair_color.slice(1)}
										eyeColor={item.eye_color.charAt(0).toUpperCase() + item.eye_color.slice(1)}
										buttonUrl="/people-card-detail/"
										buttonLabel="Learn More!"
										imageUrl={PeopleCardImage}
									/>
								</div>
							);
						})}
				</div>
			</div>
		</div>
	);
}
