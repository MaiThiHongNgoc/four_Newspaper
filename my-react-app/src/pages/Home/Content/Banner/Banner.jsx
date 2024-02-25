import React,{useState }from 'react';
import './Banner.scss';
const Banner = ({src, alt, zoomScale}) => {
  const [zoom, setZoom] = useState(false);

  //hàm sử lý khi di chuột vào
  const handleMouseEnter = () => {
    setZoom(true);
  };

  //hàm sử lý khi di chuột ra
  const handleMouseLeave =() =>{
    setZoom(false);
  };
  return (
           <div className="banner">
              <div className="banner-item">
                <div className={`banner-img ${zoom ? 'zoomed' : ''}`}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                  >
                    <img src={"https://desero-store-demo.myshopify.com/cdn/shop/files/bn1.3.png?v=1657868808"}  alt={alt || 'Zoomable Image'}/> 
                    <div className="banner-info">
                      <p>SALE UP TO 30%</p>
                      <h3 >Kiwi Juice</h3>
                      <a href=""> SHOP NOW</a>
                    </div>               
                 </div>
              </div>

              <div className="banner-item">
              <div className={`banner-img ${zoom ? 'zoomed' : ''}`}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                  >
                    <img src={"https://desero-store-demo.myshopify.com/cdn/shop/files/bn1.4.png?v=1657868808"}  alt={alt || 'Zoomable Image'}/> 
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