import React from "react";
import cloves from '../../assets/cloves.JPG';
import cardamon from '../../assets/cardamon.jpeg';
import pepper from '../../assets/pepper.jpeg';

import './index.scss';  

const SpiceList = () => {

    const spiceList=[{
        image:cloves,
        productName:"Whole Cloves",
        brand:"FireFly",
        price:"From Rs.215.00"
    },
    {
        image:cardamon,
        productName:"Green Cardamon",
        brand:"FireFly",
        price:"From Rs.300.00"
    },{
        image:pepper,
        productName:"Pepper",
        brand:"FireFly",
        price:"From Rs.220.00"
    },]
  return (
    <div className="product-lists">
        {spiceList.map(item=>
            <div className="spice-item">
            <div className="image-content">
              <img src={item.image} alt="Whole Cloves" className="spice-image" />
            </div>
            <div className="text-content">
              <h5 className="spice-name">
                <a href="#">{item.productName}</a>
              </h5>
              <p className="brand">{item.brand}</p>
              <div className="price">{item.price}</div>
            </div>
          </div>
        )}
    </div>
    
  );
};

export default SpiceList;
