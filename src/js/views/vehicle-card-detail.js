/********************************************************************************/
/* Fecha Creación:  23 Marzo 2021.                                              */
/* Autor:           Iván Fonseca Castro                                         */
/*                                                                              */
/* Descripción:     Vista principal del detalle del componente Card, el         */
/*                  componente es generico y se puede invocar con el valor del  */
/*                  ID de la Card y dibujar el detalle de acuerdo a los valores */
/*                  del objeto de Vehicles.                                     */
/*                  El componente permite renderizar los componentes de detalle */
/*                  para las Cards de Vehicles.                                 */
/********************************************************************************/

import React, { useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import VehicleCardImageDetail from "../../img/vehicle-card-image-detail.jpg";
import "../../styles/index.scss";

export default function VehicleCardDetail() {
	const params = useParams();
	const cardId = parseInt(params.id);
	const { store, actions } = useContext(Context);

	return (
		<div>
			<div className="container topCardClass" />
			<div className="container">
				{store.vehicles.map((item, index) => {
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
														src={VehicleCardImageDetail}
														alt={item.name}
													/>
												</div>
												<div className="col-lg-8">
													<div className="card-body card-body-detail pl-5">
														<h2 className="card-title text-center">{item.name}</h2>
														<p className="card-text text-left m-0">
															Model:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
															{item.model.charAt(0).toUpperCase() + item.model.slice(1)}
														</p>
														<p className="card-text text-left m-0">
															Vehicle Class:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
															{item.vehicle_class.charAt(0).toUpperCase() +
																item.vehicle_class.slice(1)}
														</p>
														<p className="card-text text-left m-0">
															Passengers:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
															{item.passengers}
														</p>
														<p className="card-text text-left m-0">
															Manufacturer:&nbsp;&nbsp;&nbsp;&nbsp;
															{item.manufacturer.charAt(0).toUpperCase() +
																item.manufacturer.slice(1)}
														</p>
														<p className="card-text text-left m-0">
															Length:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
															{item.length}
														</p>
														<p className="card-text text-left m-0">
															Cargo Capacity:&nbsp;&nbsp;
															{item.cargo_capacity}
														</p>
														<div className="card-button-back d-block">
															<Link to="/show-vehicle-card">
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
