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
                    <h2 className='home-Contectus'>Home-Pages-Contact Us</h2>
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

            <div className="Contect-map">
            
                 <GoogleMapReact
                    bootstrapURLKeys={{ key: 'YOUR_API_KEY' }} // Thay YOUR_API_KEY bằng API key của bạn
                    defaultCenter={{ lat: 10.8231, lng: 106.6297 }} // Tọa độ mặc định của bản đồ
                   defaultZoom={12} // Zoom mặc định của bản đồ
                 >
               <MapComponent
                  lat={10.8231}
                  lng={106.6297}
                  text="Đây là vị trí của bạn"
               />
                 </GoogleMapReact>
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

        <div className="Contect-footer">

        </div>

    </div>
  )
}

export default ContectUs