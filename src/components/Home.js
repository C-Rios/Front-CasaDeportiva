import React,{Component} from "react";
import Navbar from './Navbar.js';
import Banner from "./Banner.js";
import ButtonHub from "./ButtonHub.js";

class Home extends Component{

    render(){
        return (
                <div className='container-fluid'>
                    <Navbar></Navbar>
                    <Banner>Inicio</Banner>
                    <ButtonHub/>
                </div>
            );
    }
}

export default Home;
