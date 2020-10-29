import  React from "react";
import { ProductConsumer } from "../context";
import {Link} from "react-router-dom"
import  ButtonContainer from "./Button"
class Details extends React.Component{
    
    render(){
        return(
            <ProductConsumer>
                {value=>{
                    const {id ,company,img,price ,info, title ,inCart}=
                        value.detailProduct;
                    return(
                        <div className ="container py-5">
                            {/* Title */}
                            <div className ="row">
                                <div className ="col-10 mx-auto text-center text-slanted text-blue my-5">
                                    <h1>{title}</h1>
                                </div>
                            </div>
                            {/* End title  */}
                            {/* Prodciuts "Onfo" */}
                            <div className="row">
                                <div className="col-10 mx-auto col-md-6  my-3">
                                    <img src={img} className ="img-fluid" alt="product"/>
                                </div>
                                {/* Pridcuts Text */}
                                <div className="col-10 mx-auto col-md-6  text-capitalize my-3">
                                    <h2>model: {title}</h2>
                                    <h4 classname="text-title text-uppercase text-muted mt-3 mb-2">
                                        made by : <span className ="text-uppercase">
                                        {company}</span>

                                    </h4>
                                    <h4 className ="text-Blue">
                                    <strong>
                                        price : <span>$</span>{price}
                                    </strong>
                                     </h4>
                                     <p classname ="text-capitalize font-weght-bold mt-3 mb-0">
                                         some info about the product:
                                     </p>
                                     <p className="text-muted lead">{info}</p>
                                     {/* buttons */}
                                    <div>
                                        <Link to="/">
                                            <ButtonContainer>Back to Products</ButtonContainer>
                                            
                                        </Link>
                                        <ButtonContainer cart disabled={inCart ? true : false}
                                        onClick={()=>{
                                            value.addToCart(id);
                                            value.OpenModal(id);
                                        }}>
                                            {inCart ? "inCart" : "add to cart"} 
                                        </ButtonContainer>

                                    </div>
                                </div>
                            </div>                            
                        </div>
                    )
                }}
            </ProductConsumer>
        )
    }
}
export default Details 