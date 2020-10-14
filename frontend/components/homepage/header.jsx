import React from 'react';
import Navbar from './navbar'

class Header extends React.Component{
    constructor(props){
        super(props)
        this.state = {navbar: "navbar-closed"}
        this.classChange = this.classChange.bind(this)
    }

    classChange(e){
        e.preventDefault();
        let nav = ((this.state.navbar )=== "navbar-open") ? "navbar-closed" : "navbar-open"
        this.setState({navbar : nav})
    };

    render(){
        let nav = ((this.state.navbar) === "navbar-open") ? <Navbar /> : "" 
     return(
        <div className = "header-component">
            <div className = "header">
                <div className = {this.state.navbar} onClick = {this.classChange}> = </div>
                <div className = "header-text"> Mishti N Spice</div>
                <div className = "placeholder">placeholder</div>
            </div>
            
            {nav}
        </div>
        )
    }
}

export default Header; 