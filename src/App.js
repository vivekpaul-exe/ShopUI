import React from 'react';
import  "./App.css";
import {Switch,Route}from 'react-router-dom'
import { BrowserRouter as Router } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import ProductList from './components/ProductList'
import Product from './components/Product'
import NavBar from "./components/Navbar"
// import other nav bar pages
import  BestBuy  from "./components/NavNavBar/BestBuy";
import  Sell  from "./components/NavNavBar/Sell";
// import  Build  from "./components/NavNavBar/Build";
import  Contactus  from "./components/NavNavBar/Contactus";
// import  MyCorner  from "./components/NavNavBar/MyCorner";
import  Reused  from "./components/NavNavBar/Reused";
import  NewDeals  from "./components/NavNavBar/NewDeals";
//Addded the pages col\mpletly 
import Custom from "./components/NavNavBar/Custom";
import Cart from "./components/Cart"

import Navbar2 from "./components/NavNavBar/Navbar2"
import Details from "./components/Details"
import Default from "./components/Default"
import Modal from "./components/Model"
import Build from './components/NavNavBar/Build';

export default function App(){
  return(
      <React.Fragment>
        {/* <Route exact path="/Custom" component={Custom} /> */}
        <NavBar />
        <Navbar2 />
       
        <Switch>
          {/* <Route exact path="/Auth" component={Auth} /> */}
          <Route exact path="/" component={ProductList} />
          
          
          <Route exact path="/details" component ={Details} />
          <Route exact path="/products" component={Product} />
          <Route exact path="/cart" component={Cart} />
          
          <Route exact path ="/BestBuy" component={BestBuy} />
          <Route exact path ="/Build" component= {Build}/>
          <Route exact path ="/Contactus" component={Contactus} />
        
          <Route exact path ="/NewDeals" component={NewDeals} />
          <Route exact path ="/Reused" component={Reused} />
          <Route exact path ="/Sell" component={Sell} />
          <Route exact path ="" component={Default} />
        </Switch> 
        
        <Modal/>
        
      </React.Fragment>
    );
}