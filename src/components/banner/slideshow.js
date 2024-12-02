
import React from 'react';
import { Carousel } from 'primereact/carousel';
import 'primereact/resources/themes/saga-blue/theme.css'; // You can use any theme
import 'primereact/resources/primereact.min.css'; // Core styles
import 'primeicons/primeicons.css'; // Icons
import banner1 from '../../assets/banner1.jpeg';
import banner2 from '../../assets/banner2.jpeg';
import banner3 from '../../assets/banner3.jpeg';
import { Button } from 'primereact/button';
import './index.scss'



const ImageCarousel = () => {
    const items = [
        { image: banner1},
        { image: banner2 },
        { image: banner3 },
    ];

    const itemTemplate = (item) => {
        return <img src={item.image} alt="carousel" style={{ width: '100%' }} />;
    };

    return (
        <div>
 <Carousel
                value={items}
                itemTemplate={itemTemplate}
                numVisible={1}
                circular
                autoplay
                prevIcon={<Button icon="pi pi-chevron-left" className="p-button-rounded p-button-text" />}
                nextIcon={<Button icon="pi pi-chevron-right" className="p-button-rounded p-button-text" />}
                autoplayInterval={3000} 
            />        </div>
    );
};

export default ImageCarousel;
