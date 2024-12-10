import React from "react";
import AboutBanner from "../../assets/About.jpeg"
import './index.scss';

const About=()=>{
    return(
        <div className="App">
        <div>
            <h1 className="aboutusheading">About Us</h1>
        </div>
        <div className="about-content container">
            <div>
                <img src={AboutBanner} className="about-banner"/>
            </div>
            <div>
                <h2> Welcome to Firefly</h2>
                <p>
                Spices not only add a flavorful kick to meals, they also have some amazing benefits to improve certain ailments and improve overall health. Rich in antioxidants and polyphenols, spices and herbs like turmeric, cayenne pepper, cinnamon, ginger, garlic, cloves, coriander, and sage can fight inflammation, protect against chronic conditions, and can even help with losing weight.

                </p>
                <p>
                We are Cherrie Berry, an exquisite establishment located in the picturesque Highfield Estate near Sim’s Park, just a stone’s throw away from Coonoor Town. At Cherrie Berry, we are dedicated to creating unforgettable memories for diners, shoppers, travellers, and families, ensuring a delightful experience for one and all.
                </p>
            </div>
        </div>
        </div>
    )
}

export default About;