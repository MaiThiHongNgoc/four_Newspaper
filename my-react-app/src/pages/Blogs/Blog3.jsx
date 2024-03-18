import React from 'react';
import './Blogs.scss';
import 'react-icons';
import { Pagination} from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { FaTwitter } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaPinterestP } from "react-icons/fa";
import { Link } from 'react-router-dom';
const Blogs = () => {
    const handleClick = () => {
         // Load lại trang khi chuyển từ Blog3 sang Blog4
        window.location.href = '/Blogs/blog4';
    };
    const handleClick2 = () => {
        // Load lại trang khi chuyển từ Blog3 sang Blog1
       window.location.href = '/Blogs';
   };
   const handleClick3 = () => {
    // Load lại trang khi chuyển từ Blog3 sang Blog2
   window.location.href = '/Blogs/blog2';
};
const handleClick4= () => {
    // Load lại trang khi chuyển từ Blog3 sang Blog5
   window.location.href = '/Blogs/blog5';
};
const handleClick5 = () => {
    // Load lại trang khi chuyển từ Blog3 sang Blog6
   window.location.href = '/Blogs/blog6';
};

    return (
        <div className="blog-page">
            <div className="blog-all">
            <div className="blogs-text">
            <p>Home-News-<span>Popular fruit juices today</span></p>
            </div>
            <div className="blog-img">
                <img src="https://desero-store-demo.myshopify.com/cdn/shop/articles/blog3_1024x1024.png?v=1656905178" alt="" />
            </div>
            <div className="content-blog">
                <h2>How to make a delicious juice</h2> 
            <div className="content-blog2">
                <div className="a1">
                    <h3>Desero-Store Admin</h3>
                </div>
                <div className="a2">
                    <h3>04.July.2022</h3>
                </div>
                <div className="a3">
                    <h3>Coment</h3>
                </div>
            </div>
            </div>
             <div className="blog-mt">
                <p> 
                To create a delicious fruit juice or smoothie, the essential condition is to select fresh and ripe fruits, then prepare them accordingly. For juice, it's important to use a juicer, while for smoothies, a blender is needed to finely chop the fruits (adding a bit of water if necessary). The final step is to add ice to the drink; for smoothies, you can also add ice directly into the blender to create a refreshing beverage for hot summer days.
                </p>
            </div>
            <div className="blog-tag">
            <div className="blog-left">
                    <span className='title-tag1'>TAGS :</span>
                <div className="blog-hover">
                    How To Make Juice
                </div>
            </div>
            <div className="blog-right">
                <div className="blog-icon1">
                <FaTwitter />
                </div>
                <div className="blog-icon2">
                <FaFacebookF />
                </div>
                <div className="blog-icon3">
                <FaPinterestP />
                </div>
            </div>
            <hr className="blog-gach"/>
            </div>
            <div className="previous-next-post">
            <div className="previous-post">
                <span>Previous Post</span>
            </div>
            <div className="next-post">
                <span>Next Post</span>
            </div>
            </div>
            <div className="related-post">
                <span>RELATED POST</span>
                <hr className="related-post-gach"/>
            </div>
            <Swiper
            slidesPerView={1}
            spaceBetween={10}
            pagination={{
            clickable: true,
            }}
            breakpoints={{
            640: {
                slidesPerView: 1,
                spaceBetween: 20,
            },
            768: {
                slidesPerView: 1,
                spaceBetween: 20,
            },
            1024: {
                slidesPerView: 1,
                spaceBetween: 30,
            },
            }}
            modules={[Pagination]}
        >
            <div className='swiper'></div>
            <SwiperSlide>
                <div className="related-content">
                    <div className="related-content1">
                    <img src="https://desero-store-demo.myshopify.com/cdn/shop/articles/blog1_1024x1024.png?v=1656905339" alt="" />
                        <h2 className='related-new'>NEWS</h2>
                        <div className="popular">
                        <span>Popular fruit juices today</span>
                        <hr className='popular-gach'></hr>
                        </div>
                        <div className="read-more-blog">
                            <Link className="blog-link1" to="/Blogs" onClick={handleClick2}>Read more</Link>
                        </div>
                        </div>
                        <div className="related-content2">
                        <img src="https://desero-store-demo.myshopify.com/cdn/shop/articles/blog2_1024x1024.png?v=1656905260" alt="" />
                        <h2 className='related-new'>NEWS</h2>
                        <div className="popular">
                        <span>What's so special about fruit juice?</span>
                        <hr className='popular-gach2'></hr>
                        </div>
                        <div className="read-more-blog">
                            <Link className="blog-link2" to="/Blogs/blog2"onClick={handleClick3}>Read more</Link>
                        </div>
                        </div>
                        <div className="related-content3">
                        <img src="https://desero-store-demo.myshopify.com/cdn/shop/articles/blog3_1024x1024.png?v=1656905178" alt="" />
                        <h2 className='related-new'>NEWS</h2>
                        <div className="popular">
                        <span>How to make a delicious juice</span>
                        <hr className='popular-gach3'></hr>
                        </div>
                        <div className="read-more-blog">
                            <Link className="blog-link3" to="/Blogs/blog3">Read more</Link>
                        </div>
                        </div>
                        </div>
                        </SwiperSlide>
                <SwiperSlide>
                    <div className="related-content">
                        <div className="related-content4">
                            <img src="https://desero-store-demo.myshopify.com/cdn/shop/articles/blog4_1024x1024.png?v=1656905078" alt="" />
                        <h2 className='related-new'>NEWS</h2>
                        <div className="popular">
                        <span>Completely Natural Extracts</span>
                        <hr className='popular-gach'></hr>
                        </div>
                        <div className="read-more-blog">
                            <Link className="blog-link1" to="/Blogs/blog4"onClick={handleClick}>Read more</Link>
                        </div>
                        </div>
                        <div className="related-content5">
                        <img src="https://desero-store-demo.myshopify.com/cdn/shop/articles/blog5_1024x1024.png?v=1656905027" alt="" />
                        <h2 className='related-new'>NEWS</h2>
                        <div className="popular">
                        <span>Fruit Juice Is Very Good For Health</span>
                    <hr className='popular-gach2'></hr>
                    </div>
                    <div className="read-more-blog">
                    <Link className="blog-link2" to="/Blogs/blog5"onClick={handleClick4}>Read more</Link>         
                        </div>
                    </div>
                    <div className="related-content6">
                    <img src="https://cdnphoto.dantri.com.vn/J9iymj1m6m9Z91MRFZUHgGzfVYk=/zoom/1200_630/2022/08/19/nuocep-crop-1660864747363.jpeg" alt="" />
                    <h2 className='related-new'>NEWS</h2>
                    <div className="popular">
                    <span>Fiber-enriched Fruit Juice</span>
                    <hr className='popular-gach3'></hr>
                    </div>
                    <div className="read-more-blog">
                        <Link className="blog-link3" to="/Blogs/blog6"onClick={handleClick5}>Read more</Link>
                    </div>
                    </div>
                    </div>
                    </SwiperSlide>
      </Swiper>
            </div>
            </div>
    )
}

export default Blogs