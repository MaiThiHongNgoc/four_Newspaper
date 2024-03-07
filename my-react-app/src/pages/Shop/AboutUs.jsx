import React from 'react'
import Header2 from '../../Component/Header/Header2/Header2'
import './AboutUs.scss'

const AboutUs = () => {
  return (
    <div className='AboutUs'>
        <Header2/>
        <div className="Aboutus-header">
             <div className="imgAboutusContainer">
                 <img className='imgAboutus' src="https://desero-store-demo.myshopify.com/cdn/shop/files/about-heading.png?v=1657248139" alt="" />
                    <p className='text-Aboutus'>About Us</p>
                   
              </div>

              <div className="Aboutus-contaner">
                <div className="Aboutus-title">
                  <h6 className='Aboutus-h6'>Our Story</h6>
                  <p className='Aboutus-p'>
                  DESERO was established in 2013 and is a young team who are passionate about food and especially have a strong love for delicious and safe drinks and dishes from fresh fruits. We bring quality agricultural products and only use foreign fruits from the most reputable importers to serve customers with TRUE value: quality, freshness and safety.<br/>
                  DESERO is proud to be a reputable unit providing fruits and drinks to companies, offices, and families every day. Key products: Fruit juice, Vegetable juice, Smoothies, fresh fruit in pure glass bottles,... serving the needs of Hospitality, Meetings, Events or Happy Hours, Happy occasions Day.<br/>

                  </p>
                </div>

                <div className="Abotus-image">
                    <img src="https://desero-store-demo.myshopify.com/cdn/shop/files/about1.1.png?v=1657248138" alt="" />
                </div>
              </div>
        </div>

        
        <div className="Aboutus-store">
                 <h6 className='About-storeh6'>Store In The World</h6>

          <div className="About-Store1">
             <div className="About-store2">
              <h4 className='About-sth4_2'>NEWYORK STORE</h4>
              <p className='About-stp_2'>
              Brooklyn Law School. 250 Joralemon<br/>
              Monday to Friday : 9am to 8pm<br/>
              creativewithjoy@gmail.com
              </p>
            </div>
            <div className="About-store3">
            <h4 className='About-sth4_3'>HANOI STORE</h4>
              <p className='About-stp_3'>
              No. 8 Ton That Thuyet - Nam Tu Liem - Hanoi<br/>
              Monday to Friday : 8am to 5pm<br/>
              hongngoc200509@gmail.com
              </p>
            </div>
            <div className="About-store4">
            <h4 className='About-sth4_4'>LONDON STORE</h4>
              <p className='About-stp_4'>
              15-17 Charlotte Street, London<br/>
              Monday to Friday : 9am to 8pm<br/>
              Example@gmail.com
              </p>
            </div>
        </div>       
           
        </div>


        <div className="Aboutus-team">
            <h6 className='About-team'>Meet Our Teams</h6>
            <div className="About-NameTeam">
                <div className="About-name1">
                      <img src="https://desero-store-demo.myshopify.com/cdn/shop/files/about2.3.png?v=1656983821" alt="" />
                      <h2 className='About-ten'>Davit</h2>
                      <p className='About-cv'>Dev</p>
                 </div>
                <div className="About-name2">
                   <img src="https://desero-store-demo.myshopify.com/cdn/shop/files/about2.4.png?v=1656983821" alt="" />
                   <h2 className='About-ten'>Davit</h2>
                      <p className='About-cv'>Dev</p>
                </div>
                <div className="About-name3">
                  <img src="https://desero-store-demo.myshopify.com/cdn/shop/files/about2.5.png?v=1656983821" alt="" />
                  <h2 className='About-ten'>Davit</h2>
                      <p className='About-cv'>Dev</p>
                </div>
            </div>
            
        </div>


    </div>
  )
}

export default AboutUs