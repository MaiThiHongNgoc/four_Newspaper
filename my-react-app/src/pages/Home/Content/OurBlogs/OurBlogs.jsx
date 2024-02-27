import React from 'react'
import "./OurBlogs.scss";
const OurBlogs = () => {
  return (
    <div className="OurBlogs">
    <div className="center">
        <div className="heading">
            <h3> Our Blogs</h3>
        </div>
        <span className="sub_heading">

        Alienum phaedrum torquatos nec eu, detr periculis ex, nihil
            <br></br>
            expetendis in mei. Mei an pericula.
        
        </span>
    </div>
    

      <div className="img-conten">
        <div className="slick-slide">
            <div className="conten-section">
                <div className="picrure">
                <img src="https://desero-store-demo.myshopify.com/cdn/shop/articles/blog1_1024x1024.png?v=1656905339" alt="" className="image" /> 
                </div>
            </div>
            <div className="info_blog">
                <span className ="cate">News</span>
                <h4 className="title-blog">
                <span>
                Popular fruit juices today
                </span>
                </h4>
                <p className="conten">
                    
                It is a long established fact that a reader will be distracted by the readable content of a page when looking at...

                </p>
                <div className="btn_readmore">
                    <a className ="class" href="/blogs/news/popular-fruit-juices-today"> READ MORE</a>
                </div>
            </div>
        </div>
      </div>


           <div className="slick-slide">
            <div className="conten-section">
                <div className="picrure">
                <img src="https://desero-store-demo.myshopify.com/cdn/shop/articles/blog2_1024x1024.png?v=1656905260" alt="" className="image" /> 
                </div>
            </div>
            <div className="info_blog">
                <span className ="cate">News</span>
                <h4 className="title-blog">
                <span>
                What's so special about fruit juice?          
                </span>
                </h4>
                <p className="conten">
                    
                It is a long established fact that a reader will be distracted by the readable content of a page when looking at...

                </p>
                <div className="btn_readmore">
                    <a className ="class" href="/blogs/news/popular-fruit-juices-today"> READ MORE</a>
                </div>
            </div>
        </div>


        <div className="slick-slide">
            <div className="conten-section">
                <div className="picrure">
                <img src="https://desero-store-demo.myshopify.com/cdn/shop/articles/blog3_1024x1024.png?v=1656905178" alt="" className="image" /> 
                </div>
            </div>
            <div className="info_blog">
                <span className ="cate">News</span>
                <h4 className="title-blog">
                <span>
                How to make a delicious juice
                </span>
                </h4>
                <p className="conten">
                    
                It is a long established fact that a reader will be distracted by the readable content of a page when looking at...

                </p>
                <div className="btn_readmore">
                    <a className ="class" href="/blogs/news/popular-fruit-juices-today"> READ MORE</a>
                </div>
            </div>
        </div>
      </div>

      


     

      
    
  )
}

export default OurBlogs
