import React,{Component} from "react";
import "./styles/Landing.css";
import BannerTitle from "./BannerTitle"

class Banner extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return <div className="container-fluid banner_container">
            <img src="https://cdn.pixabay.com/photo/2012/04/24/18/12/cycling-40754_960_720.png" className="float-right banner_img"></img>
            <div>
                <h4 className="display-5">A Tiro De As</h4>
                <BannerTitle>{this.props.children}</BannerTitle>
            </div>
        </div>
    }
}

export default Banner;