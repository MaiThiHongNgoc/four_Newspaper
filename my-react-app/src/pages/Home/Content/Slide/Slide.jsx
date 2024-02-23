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
                    <div className='title1'>
                    <div className="box-title4">
                        <h3>SUGGESTIONS FOR YOU</h3> <br/>
                    </div>
                    <div className='box-title1'>
                        <h3>Fresh Smoothie</h3> <br/>
                    </div>
                    <div className="box-title2">
                        <h3>Drink a smoothie every day to make you healtthier.</h3> <br/>
                    </div> 
                    <div className="box-title3">
                        <a className='button'  href="">SHOP NOW</a>
                    </div>
                    </div>
                </div>
            </div>
            <div className="slide-container">
                <div style={{ 'backgroundImage': `url(${images[1]})` }}>
                <div className='title2'>
                    <div className="box-title4">
                        <h3>SUGGESTIONS FOR YOU</h3> <br/>
                    </div>
                    <div className='box-title1'>
                        <h3>Orange Juice</h3> <br/>
                    </div>
                    <div className="box-title2">
                        <h3>Drink a smoothie every day to make you healtthier.</h3> <br/>
                    </div> 
                    <div className="box-title3">
                        <a className='button'  href="">SHOP NOW</a>
                    </div>
                    </div>
                </div>
            </div>
            <div className="slide-container">
                <div style={{ 'backgroundImage': `url(${images[2]})` }}>
                    <div className='title3'>
                    <div className="box-title4">
                        <h3>SPECIAL OFFER</h3> <br/>
                    </div>
                    <div className='box-title1'>
                        <h3>Fresh Fruits Juice</h3> <br/>
                    </div>
                    <div className="box-title2">
                        <h3>10% OFF ORDER FROM $100.</h3> <br/>
                    </div> 
                    <div className="box-title3">
                        <a className='button'  href="">SHOP NOW</a>
                    </div>
                    </div>
                </div>
            </div>
        </Slide>
    );
};

export default Slideshow;