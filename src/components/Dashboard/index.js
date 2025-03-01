import React from "react";
import Header from "../Header";
import ImageCarousel from '../banner/slideshow'
import ProductList from '../productList';
import AboutUs from "../AboutUs";
import WhyFireFlyProduct from "../chooseUs";
import Footer from "../Footer";

const Dashboard = () => {
    return (
        <div>
            <Header/>
            <ImageCarousel/>
            <ProductList/>
            <AboutUs/>
            <WhyFireFlyProduct/>
            <Footer/>
        </div>
    )
};

export default Dashboard;