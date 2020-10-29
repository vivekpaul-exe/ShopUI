import React,  {Component} from "react";

export default class CartColumns extends Component {
    render(){
        return(
            <div className ="container-fluid text-center d-none d-lg-block">
                <div className ="row">
                    {}
                    <div className ="col-10 mx-auto col-lg-2">
                        <div className ="text-uppercase">Products</div>
                    </div>
                    <div className ="col-10 mx-auto col-lg-2">
                        <div className ="text-uppercase">Name of Product</div>
                    </div>
                    <div className ="col-10 mx-auto col-lg-2">
                        <div className ="text-uppercase">Price</div>
                    </div>
                    <div className ="col-10 mx-auto col-lg-2">
                        <div className ="text-uppercase">Quantity</div>
                    </div>
                    <div className ="col-10 mx-auto col-lg-2">
                        <div className ="text-uppercase">remove</div>
                    </div>
                    <div className ="col-10 mx-auto col-lg-2">
                        <div className ="text-uppercase">Total</div>
                    </div>
                </div>
                    
            </div>
        )
    }
}