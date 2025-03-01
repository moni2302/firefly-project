import React from 'react';
import './index.scss'; // External CSS for styling and animations
import sustainability from '../../assets/sustainability.jpeg';
import organicspice from '../../assets/organic species.jpg';
import spicePlantation from '../../assets/spicePlantation.jpg';
import wholesale from '../../assets/organicspice.jpeg';


const WhyFireFlyProduct = () => {
  return (
        <div className="why-firefly-container">
          <h1 className="heading">Why FireFly</h1>
          <h2 className="subheading">What We Do</h2>
    
          {/* Row 1 */}
          <div className="row">
            <div className="box">
              <div className="image-wrapper">
                <img src={organicspice} alt="Service 1" className="animated-image" />
              </div>
              <div className="description">
                <h3>Organic Spices</h3>
                <p>Emphasize that your spices are 100% organic and free from chemicals.</p>
              </div>
            </div>
            <div className="box">
              <div className="image-wrapper">
                <img src={wholesale} alt="Service 2" className="animated-image" />
              </div>
              <div className="description">
                <h3>Farm-to-Table </h3>
                <p>Stress that your spices come directly from your own farm, ensuring freshness and quality.</p>
              </div>
            </div>
          </div>
    
          {/* Row 2 */}
          <div className="row">
            <div className="box">
              <div className="image-wrapper">
                <img src={spicePlantation} alt="Service 3" className="animated-image" />
              </div>
              <div className="description">
                <h3>Sourcing from Cunnor</h3>
                <p>Highlight that the spices are sourced from Kerala, which is known for its rich and diverse agricultural heritage.</p>
              </div>
            </div>
            <div className="box">
              <div className="image-wrapper">
                <img src={sustainability} alt="Service 4" className="animated-image" />
              </div>
              <div className="description">
              <h3>Sustainability</h3>
                <p>We are committed to preserving the environment. Our farming practices are designed to minimize ecological impact, with an emphasis on sustainability, biodiversity, and organic farming techniques.</p>
              </div>
            </div>
          </div>

        </div>
      );
    };

export default WhyFireFlyProduct;
