import React,{Component} from "react";
import Navbar from "./Navbar";
import Banner from "./Banner";
import "./styles/listado.css"
import { NavLink } from "react-router-dom";
import TablaListado from "./TablaListadoProductos";

class ListadoProductos extends Component{

    render(){
        return <div className="container-fluid">
            <Navbar></Navbar>
            <Banner>Listado de productos</Banner>
            <NavLink to="/">
                <button className="btn btn-dark btn-lg regresar-listado">Regresar</button>
            </NavLink>
            <TablaListado/>
        </div>
    }
}

export default ListadoProductos;
