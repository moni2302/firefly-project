import React from "react";
import Header from "../Header";
import ImageCarousel from '../banner/slideshow'
import ProductList from '../productList';
import AboutUs from "../AboutUs";

const Dashboard = () => {
    return (
        <div>
            <Header/>
            <ImageCarousel/>
            <ProductList/>
            <AboutUs/>
        </div>
    )
};

export default Dashboard;