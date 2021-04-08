/********************************************************************************/
/* Fecha Creación:  23 Marzo 2021.                                              */
/* Autor:           Iván Fonseca Castro                                         */
/*                                                                              */
/* Descripción:     Vista principal Home, se renderiza la primera vez que se    */
/*                  carga la aplicación.                                        */
/********************************************************************************/

import React from "react";
import ShowPeopleCard from "./show-people-card";
import "../../styles/home.scss";

export const Home = () => <ShowPeopleCard />;
