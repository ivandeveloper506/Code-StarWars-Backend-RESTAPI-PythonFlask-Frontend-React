/********************************************************************************/
/* Fecha Creación:  23 Marzo 2021.                                              */
/* Autor:           Iván Fonseca Castro                                         */
/*                                                                              */
/* Descripción:     Vista principal del detalle del componente Card, el         */
/*                  componente es generico y se puede invocar con el valor del  */
/*                  ID de la Card y dibujar el detalle de acuerdo a los valores */
/*                  del objeto de Peoples.                                      */
/*                  El componente permite renderizar los componentes de detalle */
/*                  para las Cards de Peoples.                                  */
/********************************************************************************/

import React, { useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import PeopleCardImageDetail from "../../img/people-card-image-detail.jpg";
import "../../styles/index.scss";

export default function PeopleCardDetail() {
	const params = useParams();
	const cardId = parseInt(params.id);
	const { store, actions } = useContext(Context);

	return (
		<div>
			<div className="container topCardClass" />
			<div className="container">
				{store.peoples.map((item, index) => {
					if (cardId === index) {
						return (
							<div key={index}>
								<div className="row d-flex justify-content-center">
									<div className="container-fluid">
										<div className="mb-3">
											<div className="row g-0">
												<div className="col-lg-4 pr-0">
													<img
														className="card-image-detail"
														src={PeopleCardImageDetail}
														alt={item.name}
													/>
												</div>
												<div className="col-lg-8">
													<div className="card-body card-body-detail pl-5">
														<h2 className="card-title text-center">{item.name}</h2>
														<p className="card-text text-left m-0">
															Gender:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
															{item.gender.charAt(0).toUpperCase() + item.gender.slice(1)}
														</p>
														<p className="card-text text-left m-0">
															Hair Color:&nbsp;&nbsp;&nbsp;
															{item.hair_color.charAt(0).toUpperCase() +
																item.hair_color.slice(1)}
														</p>
														<p className="card-text text-left m-0">
															Eye Color:&nbsp;&nbsp;&nbsp;&nbsp;
															{item.eye_color.charAt(0).toUpperCase() +
																item.eye_color.slice(1)}
														</p>
														<p className="card-text text-left m-0">
															Height:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
															{item.height}
														</p>
														<p className="card-text text-left m-0">
															Mass:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
															{item.mass}
														</p>
														<p className="card-text text-left m-0">
															Skin Color:&nbsp;&nbsp;&nbsp;&nbsp;
															{item.skin_color.charAt(0).toUpperCase() +
																item.skin_color.slice(1)}
														</p>
														<div className="card-button-back d-block">
															<Link to="/show-people-card">
																<button
																	type="button"
																	className="btn btn-light btn-block">
																	Regresar
																</button>
															</Link>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						);
					}
				})}
			</div>
		</div>
	);
}
