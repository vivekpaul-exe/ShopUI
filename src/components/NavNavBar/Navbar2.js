import React from "react";
// import logo from "../../logo.svg"
import {Link} from "react-router-dom"
import styled from "styled-components";


export default class Navbar2 extends React.Component{
    render(){
        return(
            <NavgiationWrappper className="navbar navbar-expand-sm bg-white px-sm-2">
                <ul className ="navbar-nav align-items-center">
                    <li className="nav-item">
                        <Link to ="/MyCorner" className="navlink2">Vivek's Corner</Link>
                         
                        {/* Here the implementation is going to take place 
                        which we will grab from Authorization Page If not 
                        signed It will not Appear */}
                    </li>                        
                </ul>
                <ul className ="navbar-nav align-items-center ">
                    <li className="nav-item ">
                        <Link to="/Custom" className="navlink2">Customization</Link>
                        
                    </li>                        
                </ul>
                <ul className ="navbar-nav align-items-center">
                    <li className="nav-item ">
                    <Link to="/Build" className="navlink2">Build</Link>
                        
                        
                    </li>                        
                </ul>
                <ul className ="navbar-nav align-items-center">
                    <li className="nav-item ">
                    <Link to="/BestBuy" className="navlink2"> Best Buy</Link>
                   
                        
                    </li>                        
                </ul>
                <ul className ="navbar-nav align-items-center">
                    <li className="nav-item ">
                    <Link to="/NewDeals" className="navlink2">Today's Deal</Link>
                        
                        
                    </li>                        
                </ul>
                <ul className ="navbar-nav align-items-center">
                    <li className="nav-item ">
                    <Link to="/Reused" className="navlink2">Re-use</Link>
                        
                    </li>                        
                </ul>
                <ul className ="navbar-nav align-items-center">
                    <li className="nav-item ">
                    <Link to="/Sell" className="navlink2">Sell</Link>
                        
                    </li>                        
                </ul>
                <ul className ="navbar-nav align-items-center">
                    <li className="nav-item ">
                    <Link to="/Contactus" className="navlink2">Contact-us</Link>
                    </li>                        
                </ul>                
            </NavgiationWrappper>
            
        )
    }

}
const NavgiationWrappper = styled.nav
`
background:  var(--mainGreen) !important;


text-align : center !important;
color : var(--mainWhite);
z-index:1;
width:100%;
.navlink2{
    color:var(--mainWhite) !important;
    font-size: 1rem;
    text-tansform:uppercase !important;
    
}
ul.navbar-nav.align-items-center {
    width: 12.5% !important;
}
a{
    text-decoration:none !important;
}
`;