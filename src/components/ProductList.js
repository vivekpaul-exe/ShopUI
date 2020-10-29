import React from 'react';
import Product from "./Product";
import Title from './Title'
// import image from "../hero.jpg"
import Banner from "./NavNavBar/MyCorner";
import styled from "styled-components";
import {ProductConsumer} from "../context"
class ProductList extends React.Component{  
    render() { 
        return(
           <React.Fragment>
                <div className= "py-5">
                    <HeroWrapper>
                         <div  className="hero-image"> 
                         <div clasName ="hero-text">
                             <h1>Our Products</h1>
                         </div>
                         </div>
                    </HeroWrapper>
                    
                   
                       

                    
                
                    <div className="container">
                        <Title name = "Our" title ="Products"/>
                        <div className ="row">
                            <ProductConsumer >
                                {value =>{
                                    return value.products.map( product => {
                                        return <Product key={product.id} product={product}/>
                                    })
                                }}
                            </ProductConsumer>
                        </div>
                    </div>
                </div>
           </React.Fragment>

        )
        


    }


}
const HeroWrapper= styled.div`


.hero-text{
    text-align:center;
    position:absolute;
    top:50%;
    left:50%;
    transform:translate(-50%,-50%);
    color: white;

},
h1 {
    text-align: center;
    justify-content: center;
    margin-top: 0rem;
    position: relative;
    padding: 10rem;
    font-family: fantasy;
    font-size: 5rem;
    color: #f9d100;
},


.jocZeZ .hero-image {
    background-image: linear-gradient(rgb(71 30 154 / 32%),rgb(116 37 155 / 0%)) ,url(hero.jpg);
    height: 43rem;
    position: fixed;
    background-size: cover;
    position: relative;
    margin-top: -3rem;
    /* bottom: 0rem; */
    bottom: 7rem;
}
`;



export default ProductList;