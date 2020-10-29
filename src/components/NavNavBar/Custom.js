import React from "react"
import Styled from "styled-components";
// This will Appy a filter on Price and Ratings For the Whokle 
// Site to be  Appealling for the custimers  

class Custom extends React.Component{
    constructor(){
        super();
        this.state={
            
        }
    }
    render(){
        const {classes,price}= this.props;

        return(
            <React.Fragment>
            <div className="sidenav" >
                <h5>This is from the SideBar</h5>    
            </div>
            <div className="switch"></div>
        </React.Fragment>
        )
    }
}

export default Custom
