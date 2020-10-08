import React from 'react'
import Header from './header'

class Homepage extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div>
                <Header /> 
            </div>
        )
    }
}

export default Homepage; 