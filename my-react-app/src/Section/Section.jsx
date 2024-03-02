// import React from 'react'
// import "./Section.scss"
// import { FaRegCircleXmark } from "react-icons/fa6";
// const Section = () => {
//   return (
//     <section className="popup3">
//         <div className="modal-overlay"></div>

//         <div className="window">
//             <div className="modal-window">
//                 <div className="modal-content">
//                     <a href="" className="close_edit">
//                         <span className="white">
//                         <FaRegCircleXmark />
//                         </span>
//                     </a>

//                     <div className="left">
//                         <div className="left_content">
//                             <h3 className="newsletter">SIGNUP FOR EMAILS</h3>
//                             <h1 className="title">Get 20% discount shipped to your inbox</h1>
//                             <p className="sub-title">
//                                Subscribe to our newsletter and we will ship 
//                                <strong> 20% discount code </strong>
//                                today
//                             </p>

//                             <div className="email-subscibe">
//                                 <div className="embed_signup">
//                                     <form method="post" action="/account" className="create_customer">
//                                         <input type="hidden" name="form_type" value="create_customer" />
//                                         <input type="hidden" name='utf8' value=""/>
//                                         <div className="create">
//                                             <div className="group">
//                                                 <input type="email" placeholder="Enter Your Email..." className="customer" name="customer[email]" required=""/>
//                                                 <button type="submit" className="primary">Subscribe</button>
//                                             </div>
//                                         </div>
//                                     </form>
//                                 </div>
//                             </div>


//                             <a href="" className="no_thank" title="Close">No, Thanhs.</a>

//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     </section>
//   )
// }

// export default Section




import React, { useState, useEffect } from 'react';
import './Section.scss'
import { FaRegCircleXmark } from "react-icons/fa6";

const Section = () => {
  const [showSection, setShowSection] = useState(false);

  useEffect(() => {
    const hasSeenSection = sessionStorage.getItem('hasSeenSection');
    if (!hasSeenSection) {
      setShowSection(true);
      sessionStorage.setItem('hasSeenSection', true);
    }
  }, []);

  const handleClose = () => {
    setShowSection(false);
  };

  return (
    <>
      {showSection && (
        
            <section className="popup3">
         <div className="modal-overlay"></div>

         <div className="window">
             <div className="modal-window">
                 <div className="modal-content">
                     <a href="" className="close_edit">
                         <span className="white"  onClick={handleClose}>
                         <FaRegCircleXmark />
                         </span>
                     </a>

                     <div className="left">
                         <div className="left_content">
                             <h3 className="newsletter">SIGNUP FOR EMAILS</h3>
                             <h1 className="title">Get 20% discount shipped to your inbox</h1>
                             <p className="sub-title">
                                Subscribe to our newsletter and we will ship 
                                <strong> 20% discount code </strong>
                                today
                             </p>

                             <div className="email-subscibe">
                                 <div className="embed_signup">
                                     <form method="post" action="/account" className="create_customer">
                                         <input type="hidden" name="form_type" value="create_customer" />
                                         <input type="hidden" name='utf8' value=""/>
                                         <div className="create">
                                             <div className="group">
                                                 <input type="email" placeholder="Enter Your Email..." className="customer" name="customer[email]" required=""/>
                                                 <button type="submit" className="primary">Subscribe</button>
                                             </div>
                                         </div>
                                     </form>
                                 </div>
                             </div>


                             <a href="" className="no_thank" title="Close">No, Thanhs.</a>

                         </div>
                     </div>
                 </div>
             </div>
         </div>
     </section>
          
       
      )}
    </>
  );
};

export default Section;
