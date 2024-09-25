import React from 'react';
import './Contact.css';
import { Link } from 'react-router-dom';
import bkimgc from '../../assets/contact_bk.jpg';
import ContactInfo from './ContactInfo'; // Import ContactInfo component

const Contact = () => {
  return (
    <div className="row g-4 g-xxl-5" id='rowcont'>
      <div className="col-xl-9 mx-auto">
        {/* Background Image */}
        <img src={bkimgc} className="rounded" alt="contact-bg" />

        {/* Contact form START */}
        <div className="row mt-n5 mt-sm-n7 mt-md-n8" id='form-cont'>
          <div className="col-11 col-lg-9 mx-auto">
            <div className="card shadow p-4 p-sm-5 p-md-6">
              {/* Card header */}
              <div className="card-header border-bottom px-0 pt-0 pb-5">
                {/* Breadcrumb */}
                <nav className="mb-3" aria-label="breadcrumb">
                  <ol className="breadcrumb breadcrumb-dots pt-0">
                    <li className="breadcrumb-item">
                      <Link to="/art_class/">Home</Link>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">Contact us</li>
                  </ol>
                </nav>
                {/* Title */}
                <h1 className="mb-3 h3">Let's make the world Creative</h1>
                <p className="mb-0">You can reach us anytime via <a href="mailto:example@gmail.com">artclass@gmail.com</a></p>
              </div>
              {/* Card body & form */}
              <form className="card-body px-0 pb-0 pt-5">
                {/* Name */}
                <div className="input-floating-label form-floating mb-4">
                  <input type="text" className="form-control bg-transparent" id="floatingName" placeholder="Your name" />
                  <label htmlFor="floatingName">Your name</label>
                </div>
                {/* Email */}
                <div className="input-floating-label form-floating mb-4">
                  <input type="email" className="form-control bg-transparent" id="floatingInput" placeholder="name@example.com" />
                  <label htmlFor="floatingInput">Email address</label>
                </div>
                {/* Number */}
                <div className="input-floating-label form-floating mb-4">
                  <input type="text" className="form-control bg-transparent" id="floatingNumber" placeholder="Phone number" />
                  <label htmlFor="floatingNumber">Phone number</label>
                </div>
                {/* Message */}
                <div className="input-floating-label form-floating mb-4">
                  <textarea className="form-control bg-transparent" placeholder="Leave a comment here" id="floatingTextarea2" style={{ height: "100px" }}></textarea>
                  <label htmlFor="floatingTextarea2">Message</label>
                </div>
                {/* Button */}
                <button className="btn btn-lg btn-primary mb-0">Send a message</button>
              </form>
            </div>
          </div>
        </div>
        <hr className="featurette-divider" />
        {/* Contact form END */}

        {/* Contact Info Section */}
        <ContactInfo /> {/* Inserted ContactInfo component here */}
        <hr className="featurette-divider" />
      </div>
    </div>
  );
};

export default Contact;
