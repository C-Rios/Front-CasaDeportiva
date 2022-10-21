import React,{Component} from "react";
import Navbar from "./Navbar";
import Banner from "./Banner";
import "./styles/listado.css"
import { NavLink } from "react-router-dom";
import TablaCatalogo from "./TablaCatalogoProductos";

class CatalogoProductos extends Component{

    render(){
        return <div className="container-fluid">
            <Navbar></Navbar>
            <Banner>Catalogo de productos</Banner>
            <NavLink to="/">
                <button className="btn btn-dark btn-lg regresar-listado">Regresar</button>
            </NavLink>
            <TablaCatalogo></TablaCatalogo>
        </div>
    }
}

export default CatalogoProductos;
