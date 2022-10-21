import React,{Component} from "react";

class Navbar extends Component{
    render(){
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <a className="navbar-brand" href="https://github.com/C-Rios/CasaDeportiva">
                <strong className="m-5">Casa deportiva</strong>
            </a>      
            <div className="m-2 mr-4" id="navbarText">
                <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                    <a className="nav-link display-4"  href="https://www.linkedin.com/in/juan-camilo-de-los-r%C3%ADos-0164ba23b">Juan Camilo De Los Ríos </a>
                </li>
                </ul>
            </div>
            </nav>
        );
    }
}

export default Navbar;