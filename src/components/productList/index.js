import React from "react";
import SpiceList from './list'
import './index.scss';


const ProductList=()=>{
    return(
        <div className="container text-align-left">
            <h2 className="">Crowd Favourites</h2>
            <div className="">
                <p>Our most loved products</p>
            </div>
            <SpiceList/>
        </div>
    )
}
export default ProductList;