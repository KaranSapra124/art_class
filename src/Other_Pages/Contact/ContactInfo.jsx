import React from 'react';
import './ContactInfo.css'; // Assuming the CSS is saved in ContactInfo.css
import mail_ic from '../../assets/contact/mail.png'
import call_ic from '../../assets/contact/call.png'
import location from '../../assets/contact/location.png'
import india from '../../assets/contact/india.png'

const ContactInfo = () => {
  return (
    <div className="container">
      <div className="row row-cols-1 row-cols-lg-3 g-4">
        {/* Address info */}
        <div className="col">
          <div className="card card-body bg-light border p-sm-5">
            {/* Icon */}
            <img id='loc' className='icon_style' src={location}/>
            <div className="mb-4"><i className="bi bi-geo-alt fa-xl text-primary"></i></div>
            <h6 className="mb-3">Class Address</h6>
            <p >1421 Coburn Hollow Road Metamora, Near Center Point, IL 61548.</p>
            <a className="heading-color text-primary-hover text-decoration-underline mb-0">Address</a>
          </div>
        </div>

        {/* Email info */}
        <div className="col">
          <div className="card card-body bg-light border p-sm-5">
            <img className='icon_style' src={mail_ic}/>
            <div className="mb-4"><i className="bi bi-envelope fa-xl text-primary"></i></div>
            {/* Title */}
            <h6 className="mb-3">Email us</h6>
            <p>We're on top of things and aim to respond to all inquiries within 24 hours.</p>
            <a href="mailto:example@gmail.com" className="heading-color text-primary-hover text-decoration-underline mb-0">example@gmail.com</a>
          </div>
        </div>

        {/* Contact info */}
        <div className="col">
          <div className="card card-body bg-light border p-sm-5">
            <img className='icon_style' src={call_ic}/>
            <div className="mb-4"><i className="bi bi-telephone fa-xl text-primary"></i></div>
            {/* Title */}
            <h6 className="mb-3">Call us</h6>
            <p>Let's learn together towards a common goal - get in touch!</p>
            <a href="tel:+12518546308" className="heading-color text-primary-hover text-decoration-underline mb-0">+91 9650927491</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
