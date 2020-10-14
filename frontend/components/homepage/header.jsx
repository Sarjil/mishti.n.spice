import React from 'react';

class Header extends React.Component{
    constructor(props){
        super(props)
        this.state = {navbar: "navbar-open"}
        this.classChange = this.classChange.bind(this)
    }

    classChange(e){
        e.preventDefault();
        let nav = ((this.state.navbar )=== "navbar-open") ? "navbar-closed" : "navbar-open"
        this.setState({navbar : nav})
    };

    render(){
     return(
        <div className = "header-component">
            <div className = "header">
                <div className = {this.state.navbar} onClick = {this.classChange}> = </div>
                <div className = "header-text"> Mishti N Spice</div>
                <div className = "placeholder">placeholder</div>
            </div>
            
        </div>
        )
    }
}

export default Header; 