import React, {useState} from 'react'
import Header2 from '../../../Component/Header/Header2/Header2'
import './ContectUs.scss'
import { LuMapPin } from "react-icons/lu";
import { BsPhoneVibrate } from "react-icons/bs";
import { FiClock } from "react-icons/fi";
import { IoMailOpenOutline } from "react-icons/io5";
import axios from 'axios'
import GoogleMapReact from 'google-map-react'

const ContectUs = () => {
    const MapComponent = ({ text }) => <div>{text}</div>;
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const response = await axios.post('YOUR_API_ENDPOINT', {
                name: name,
                email: email,
                message: message
            });
            console.log('Response:', response.data);
            alert('Tin nhắn của bạn đã được gửi đi!');
            // Reset form sau khi gửi
            setName('');
            setEmail('');
            setMessage('');
        } catch (error) {
            console.error('Có lỗi xảy ra:', error);
            alert('Xin lỗi, có lỗi xảy ra. Vui lòng thử lại sau.');
        }
    };
  return (
    <div className='Contect'>
       <Header2/>
        <div className="Contect-header">
             <div className="imgContectContainer">
                 <img className='imgContect' src="https://desero-store-demo.myshopify.com/cdn/shop/files/about-heading.png?v=1657248139" alt="" />
                    <p className='text-Contectus'>Contact Us</p>
                    
              </div>
        </div>

        <div className="Contect-contaner">
            <div className="Contect-title">
                <div className="contect-home">
                    <h2 className='Ct-h2'>Contact Us</h2>
                    <p className='Ct-p'>If you would like to know more about our policies, you can consult our Terms and Conditions. You will also be able to follow your order (tracking number will be provided in an e-mail after ordering). You wish to return some items?</p>
                </div>
                <div className="icon-ct1">
                    <div className='icon-ct-address1'><LuMapPin className='icon-address2' /></div>
                    <div className='icon-ct-nd1'>
                        <h5 className='icon-ct-tt1'>Address</h5>
                        <p className='icon-ct-p1'>Click the icon in the bottom right of the page to talk to our agents during business hours. At other times we will respond as soon as possible.</p>
                    </div>
                </div>

                <div className="icon-ct2">
                    <div className='icon-ct-address2'><BsPhoneVibrate className='icon-address2'/></div>
                    <div className='icon-ct-nd2'>
                        <h5 className='icon-ct-tt2'>Phone</h5>
                        <p className='icon-ct-p2'> 0769 824 365.</p>
                    </div>
                </div>

                <div className="icon-ct3">
                    <div className='icon-ct-address3'><FiClock className='icon-address2' /></div>
                    <div className='icon-ct-nd3'>
                        <h5 className='icon-ct-tt3'>Open Hours</h5>
                        <p className='icon-ct-p3'>Monday to Friday 09:30 - 17:30 <br></br>Saturday & Sunday 10:00 - 15:00</p>
                    </div>
                </div>

                <div className="icon-ct4">
                    <div className='icon-ct-address4'><IoMailOpenOutline className='icon-address2'/></div>
                    <div className='icon-ct-nd4'>
                        <h5 className='icon-ct-tt4'>Email</h5>
                        <p className='icon-ct-p4'>hongngoc200509@gmail.com</p>
                    </div>
                </div>

            </div>

            
            
            <div className="ContactUs-map">
                 <iframe
                     src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3724.0969490731823!2d105.77971427343383!3d21.028806487780436!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x313454b32b842a37%3A0xe91a56573e7f9a11!2zOGEgVMO0biBUaOG6pXQgVGh1eeG6v3QsIE3hu7kgxJDDrG5oLCBD4bqndSBHaeG6pXksIEjDoCBO4buZaSAxMDAwMDAsIFZp4buHdCBOYW0!5e0!3m2!1svi!2s!4v1710004422263!5m2!1svi!2s" 
                     width="600"
                     height="900"
                     style={{ border: 0 }}
                     allowFullScreen=""
                     loading="lazy">
                 </iframe>
     
            </div>

        </div>

        <div className="Contect-send">
          <h5 className='Ct-send-title'>Send Us An Message</h5>
          <div className="Ct-from">
          <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={name} className='Ct-name'
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Your name..."
                    required
                />
                <input
                    type="email"
                    value={email} className='Ct-email'
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Your mail..."
                    required
                />
                <textarea
                    value={message} className='Ct-mess'
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Enter your message..."
                    required
                />
                <button type="submit" className='Ct-button'>Send</button>
            </form>
          </div>
        </div>


    </div>
  )
}

export default ContectUs