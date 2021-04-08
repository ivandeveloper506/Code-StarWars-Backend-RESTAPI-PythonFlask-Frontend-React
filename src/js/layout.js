/********************************************************************************/
/* Fecha Creación:  23 Marzo 2021.                                              */
/* Autor:           Iván Fonseca Castro                                         */
/*                                                                              */
/* Descripción:     Archivo principal para definición de rutas de la aplicación.*/
/********************************************************************************/

import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import { Home } from "./views/home";
import ShowPeopleCard from "./views/show-people-card";
import PeopleCardDetail from "./views/people-card-detail";
import ShowPlanetCard from "./views/show-planet-card";
import PlanetCardDetail from "./views/planet-card-detail";
import ShowVehicleCard from "./views/show-vehicle-card";
import VehicleCardDetail from "./views/vehicle-card-detail";
import NotFoundPage from "./component/not-found-page";
import injectContext from "./store/appContext";
import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";

//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div className="d-flex flex-column">
			<BrowserRouter basename={basename}>
				<Navbar />
				<Switch>
					<Route exact path="/" component={Home} />
					<Route exact path="/show-people-card" component={ShowPeopleCard} />
					<Route exact path="/people-card-detail/:id" component={PeopleCardDetail} />
					<Route exact path="/show-planet-card" component={ShowPlanetCard} />
					<Route exact path="/planet-card-detail/:id" component={PlanetCardDetail} />
					<Route exact path="/show-vehicle-card" component={ShowVehicleCard} />
					<Route exact path="/vehicle-card-detail/:id" component={VehicleCardDetail} />
					<Route exact path="*" component={NotFoundPage} />
				</Switch>
				<Footer />
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
