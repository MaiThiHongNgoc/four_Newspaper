import React from 'react'
import './Banner.scss'
const Banner = () => {
  return (
           <div className="banner">
              <div className="banner-item">
                <div className="banner-img">
                    <img src="https://desero-store-demo.myshopify.com/cdn/shop/files/bn1.3.png?v=1657868808" alt="" /> 
                    <div className="banner-info">
                      <p>SALE UP TO 30%</p>
                      <h3 >Kiwi Juice</h3>
                      <a href=""> SHOP NOW</a>
                    </div>               
                 </div>
              </div>

              <div className="banner-item">
                <div className="banner-img">
                    <img src="https://desero-store-demo.myshopify.com/cdn/shop/files/bn1.4.png?v=1657868808" alt="" /> 
                    <div className="banner-info">
                     <p>SALE UP TO 30%</p>
                     <h3 >Orange Juice</h3>
                     <a href=""> SHOP NOW</a>
                    </div>               
                 </div>
              </div>
                
            </div>
          
              
             
  )
}

export default Banner