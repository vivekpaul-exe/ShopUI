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
                            <div className='hero-text-detail'>
                                <h1 className='top-hero'>30%</h1>
                             <p clasName="hero-text-2"> off on</p>
                              
                            </div>
                           <p className='hero-text-3'>electronics</p>
                         </div>
                         </div>
                    </HeroWrapper>
                    
                   
                       

                    
                
                    <div className="container">
                        <div className='heading-text'>
                            <div className='head-text-1'>Our</div>
                             <div className='head-text-1'>Products</div>
                        </div>
                        {/* <Title name = "Our" title ="Products"/> */}
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
    color: #F9F9F9 !important;
    padding:1em;
},
.heading-text{
    display:flex;
    text-align:center;
    font-weight:800;
    
},
.head-text-1 {
    font-color:800;
    text-align:center;
    font-family:Manrope;
    font-size:3em;
    font-color:#19161F;
},
.head-text-2 {
    font-color:800;
    font-family:Manrope;
    font-size:3em;
    font-color:#8D5FB9;

},
.hero-text-detail{
    font-family:Manrope;
    display:flex;
    color: #F9F9F9 !important;
    

},
.container {
    max-width:1440px !important;

},

.top-hero{
    font-family:Manrope;
    font-weight:800;
    font-size:3em;
},
herp-text-2 {
    font-family:Manrope;
    font-weight:400 !important;
    color: #F9F9F9 !important;
    font-size:40px !important;
    margin-top:1.8em !important;
},
hero-text-3 {
    font-family:Manrope;
    font-weight:800 !important;
    color: #F9F9F9 !important;
    text-align:left;
    font-size:1em !important;
    
},
h1 {
    text-align: center;
    justify-content: center;
    margin-top: 0rem;
    position: relative;
    // padding: 10rem;
    font-family: Manrope;
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