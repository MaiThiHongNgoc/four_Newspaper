import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import './Slide.scss'

const Slideshow = () => {
    const images = [
        "https://desero-store-demo.myshopify.com/cdn/shop/files/bn1.1.png?v=1657868808&fbclid=IwAR0bmGd3OHSjTSORPnzZ5s3U94QgAFnaMrnU6tvcY9qOeR2bjlNfsBpuRjk",
        "https://desero-store-demo.myshopify.com/cdn/shop/files/bn1.2.png?v=1657868808&fbclid=IwAR2DsNcwcTQmZJlVe3d3kORLgK2jiMGqQrIC-OOC5UJuHtHf3HR5ORWE-4M",
        "https://desero-store-demo.myshopify.com/cdn/shop/files/bn2.1.png?v=1657869067&fbclid=IwAR0oRIYOKUetSdPVFv5APRwSPo2xkBaTSubT-H7cqqA_EUdImAZTkZUQj7I",
    ];

    return (
        <Slide>
            <div className="slide-container">
                <div style={{ 'backgroundImage': `url(${images[0]})` }}>
                    <span>Slide 1</span>
                </div>
            </div>
            <div className="slide-container">
                <div style={{ 'backgroundImage': `url(${images[1]})` }}>
                    <span>Slide 2</span>
                </div>
            </div>
            <div className="slide-container">
                <div style={{ 'backgroundImage': `url(${images[2]})` }}>
                    <span>Slide 3</span>
                </div>
            </div>
        </Slide>
    );
};

export default Slideshow;