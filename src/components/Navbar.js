import React from "react"
import {Link} from 'react-router-dom';
import man from '../man.svg'
import styled from "styled-components";
import ButtonContainer from "./Button"
export default class NavBar extends React.Component{
   // handleClick = () =>{
   //      ()=>{return(
   //          <ReDirect to="/SignUp" />
   //      )}
   // }
    render(){
        // const DarkMode= () =>{
        //     let Dork = this.state.value;
            
        //     Dork ? this.setState(()={return{value:false}}) : this.setState(()=>{return{
        //         value:true>
        //     }});
            
        // }
        const AvaWrapper =styled.div`
        img.avatar {
            width: 3rem;
            margin-left: -2em;
            outline: none;
            border: 3px solid #88d317;
            border-radius: 3rem;
        }
        `;
        
        return(
            <NavWrapper className="navbar navbar-expand-sm bg-primary navbar-dark px-sm-5">
                {/* 
                https://www.iconfinder.com/icons/1243689/call_phone_icon
                Creative Commons (Attribution 3.0 Unported);
                https://www.iconfinder.com/Makoto_msk  */}
                
                    {/* <Link to='/'> */}
                    {/* Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a> */}
                    <AvaWrapper>
                        <img src={man} alt="Avatar" 
                        className="avatar" />
                        </AvaWrapper>
                    {/* </Link> */}
                    <ul className = "navbar-nav align-items-center" >
                        <li className="nav-item ml-1" > 
                            <Link to="/SignUp"  className="nav-link">SignUp</Link>
                        </li>
                    </ul>
                    <ul className = "navbar-nav align-items-center">
                        <li className="nav-item ml-1"> 
                            <Link to="/"  className="nav-link">products</Link>
                        </li>
                    </ul>
                    <div className="wrap">
                        <div className="search">
                            <input type="text" class="searchTerm" placeholder="What are you looking for?"/>
                            <button type="submit" class="searchButton">
                                <i class="fa fa-search"></i>
                            </button>
                        </div>
                    </div>
                    {/* Srcip[t foor the serach box takes place here] */}

                    
                    

         
                {/* <Link to="">
                </Link> */}
                <Link to="/cart" className= "ml-auto">
                    <ButtonContainer>
                        <span className ="mr-2">
                            <i className="fas fa-shopping-cart" />
                        </span>
                        
                    </ButtonContainer>
                </Link>
                 {/* <ul Dork className = "navbar-nav align-items-right">
                 <li className="nav-item "> 
                   <button className="ThemeButton" >
                        <span className="mr-1">
                               <i class="fas fa-adjust"></i>
                        </span>
                               {this.state.value} 
                    </button>
                </li>
         </ul> */}
            </NavWrapper>
        )
        
    }
}
const NavWrapper = styled.nav
`
background:var(--mainPurple) !important;
.nav-link{
    color:var(--mainWhite) !important;
    font-size:1.0rem;
    text-transform: capitalize;

}

input.flexbox {
    width:36rem;
    outline:none;
    height: 2.3rem;
    border-radius: 15em;
    border: none;
    position : relative;
},
{
    height:2.3rem;
}
button.search_button {
    outline: none;
    position: absolute;
    border: solid;
    background-color: var(--mainGreen);
    border-color: var(--mainGreen);
    width: 6em;
    height:2.3em;

    border-radius: 12em 24em 24em 11em;
    margin-left: -6em;
},
button.ThemeButton {
    background: var(--mainGreen);
    border: none;
    outline: none;
    color: white;
    z-index:1;
}
// ipjectioni of the seradch button takes place here
.search {
    width: 100%;
    position: relative;
    display: flex;
  }
  
  .searchTerm {
    width: 100%;
    border: 3px solid var(--mainGreen);
    border-right: none;
    padding: 5px;
    background-color:var(--mainWhite);
    
    height: 2.4rem;
    border-radius: 5px 0 0 5px;
    outline: none;
    color: var(--mainGreen);
  }
  
  .searchTerm:focus{
    color: var(--mainGreen);
  }
  
  .searchButton {
    width: 40px;
    height: 2.4rem;
    border: 1px solid  var(--mainGreen);
    background:  var(--mainGreen);
    text-align: center;
    color: #fff;
    border-radius: 0 5px 5px 0;
    cursor: pointer;
    font-size: 20px;
  }
  
  /*Resize the wrap to see the search bar change!*/
  .wrap{
    width: 30%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  },
   


`