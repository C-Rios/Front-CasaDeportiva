import React,{Component} from "react";

class Navbar extends Component{
    render(){
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <a className="navbar-brand" href="#">
                <strong className="m-5">Casa deportiva</strong>
            </a>      
            <div className="m-2 mr-4" id="navbarText">
                <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                    <a className="nav-link display-4"  href="#">Juan Camilo De Los Ríos </a>
                </li>
                </ul>
            </div>
            </nav>
        );
    }
}

export default Navbar;