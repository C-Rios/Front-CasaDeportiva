import React,{Component} from "react";
import "./styles/Landing.css";

class BannerTitle extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return <h5 className="display-6 banner-title">{this.props.children}</h5>
    }
}

export default BannerTitle;