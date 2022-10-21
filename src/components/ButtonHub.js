import React,{Component} from "react";
import { NavLink } from "react-router-dom";
import "./styles/Landing.css"

class ButtonHub extends Component{

    render(){
        return <div className="container-fluid button-hub">
            <NavLink to="/listado">
                <button className="btn btn-dark btn-lg button-menu">Listado de productos</button>
            </NavLink>
            <NavLink to="/catalogo">
                <button className="btn btn-dark btn-lg button-menu">Catalogo de productos</button>
            </NavLink>
        </div>
    }
}

export default ButtonHub;
