import React from 'react';
import './Blogs.scss';
import 'react-icons';
import { FaTwitter } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaPinterestP } from "react-icons/fa";
import Header2 from '../../Component/Header/Header2/Header2';
const Blogs = () => {
    return (
        <div className="blog-page">
            <Header2/>

            <div className="blog-all">
            <div className="blogs-text">
            <p>Home-News-<span>Popular fruit juices today</span></p>
            </div>
            <div className="blog-img">
                <img src="https://desero-store-demo.myshopify.com/cdn/shop/articles/blog2_1024x1024.png?v=1656905260" alt="" />
            </div>
            <div className="content-blog">
                <h2>What's so special about fruit juice?</h2> 
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
                It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
                </p>
            </div>
            <div className="blog-tag">
            <div className="blog-left">
                    <span className='title-tag1'>TAGS :</span>
                <div className="blog-hover2">
                    Fruit Jucie
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
            <div className="related-content">
                <div className="related-content1">
                <img src="https://desero-store-demo.myshopify.com/cdn/shop/articles/blog1_1024x1024.png?v=1656905339" alt="" />
                    <h2 className='related-new'>NEWS</h2>
                    <div className="popular">
                    <span>Popular fruit juices today</span>
                    <hr className='popular-gach'></hr>
                    </div>
                    <div className="read-more-blog">
                        <a className='blog-link1' href='http://localhost:3000/Blogs'>Read more</a>
                    </div>
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
                        <a classname="blog-link2"href="http://localhost:3000/Blogs/blog2">Read more</a>
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
                        <a className="blog-link3"href="http://localhost:3000/Blogs/blog3">Read more</a>
                    </div>
                </div>
            </div>
            </div>
    )
}

export default Blogs