import React from 'react';
import './Footer.css';
import main_log from '../../assets/main_logo.png';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className="containeroo pt-4" id="whole">
      <hr className="featurette-divider" />
      <div className="row justify-content-center">
        <div className="col-lg-12">
          <div className="row align-items-center">
            <div className="col-lg-7">
              <h3 className="text-secondary mb-2">Brilliant solutions for your ideas of creation</h3>
              <p className="lead mb-0 text-white opacity-8">
                Build modern-looking arts using some basic fundamentals.
              </p>
            </div>
            <div className="col-lg-5 text-lg-right mt-4 mt-lg-0" >
              <a
                href=""
                className="btn btn-white btn-icon my-2 " 
                id="button_margin"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="btn-inner--text" style={{color:'black'}}>Documentation</span>
              </a>
              <Link to="/art_class/Formenroll">
                <button
                  className="btn btn-primary my-2 ml-0 ml-sm-3"
                  id="enroll_btn"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Enroll Now
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <hr className="divider divider-fade divider-dark my-5" />
      <div className="row">
        <div className="col-lg-4 mb-5 mb-lg-0" id="footer-logo-section">
          <a href="index.html">
            <img alt="Image placeholder" src={main_log} id="footer-logo" />
          </a>
          <span id="art_love">Love the Art :) It Loves you back</span>
          <p className="mt-4 text-sm opacity-8 pr-lg-4">
            An art class provides a creative space for individuals to explore and express their imagination
            through various mediums like painting, drawing, and sculpture. It encourages the development of
            artistic skills while fostering creativity and self-expression.
          </p>
          {/* <ul className="nav mt-4" id="social_links">
            <li className="nav-item">
              <a
                className="nav-link pl-0"
                href="https://dribbble.com/webpixels"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-dribbble"></i>
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="https://github.com/webpixels"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-github"></i>
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="https://www.instagram.com/webpxs"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-instagram"></i>
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="https://www.facebook.com/webpixels"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-facebook"></i>
              </a>
            </li>
          </ul> */}
        </div>
        <div className="col-lg-2 col-6 col-sm-4 ml-lg-auto mb-5 mb-lg-0" id="account_section">
          <h6 className="heading mb-3">Account</h6>
          <ul className="list-unstyled" id="account_links">
            <li><a href="#">Profile</a></li>
            <li><a href="#">Settings</a></li>
            <li><a href="#">Billing</a></li>
            <li><a href="#">Notifications</a></li>
          </ul>
        </div>
        <div className="col-lg-2 col-6 col-sm-4 mb-5 mb-lg-0" id="about_section">
          <h6 className="heading mb-3">About</h6>
          <ul className="list-unstyled" id="about_links">
            <li><a href="#">Services</a></li>
            <li><a href="#">Pricing</a></li>
            <li><a href="#">Contact</a></li>
            <li><a href="#">Careers</a></li>
          </ul>
        </div>
        <div className="col-lg-2 col-6 col-sm-4 mb-5 mb-lg-0" id="company_section">
          <h6 className="heading mb-3">Company</h6>
          <ul className="list-unstyled" id="company_links">
            <li><a href="#">Community</a></li>
            <li><a href="#">Help center</a></li>
            <li><a href="#">Support</a></li>
          </ul>
        </div>
      </div>
      <hr className="divider divider-fade divider-dark my-4" />
      <div className="row align-items-center justify-content-md-between pb-4">
        <div className="col-md-6">
          <div className="copyright text-sm font-weight-bold text-center text-md-left">
            © 2024 <a className="font-weight-bold" target="_blank" rel="noopener noreferrer">Suraj</a>. All rights
            reserved
          </div>
        </div>
        <div className="col-md-6">
          <ul className="nav justify-content-center justify-content-md-end mt-3 mt-md-0" id="footer_links">
            <li className="nav-item"><a className="nav-link" href="#">Terms</a></li>
            <li className="nav-item"><a className="nav-link" href="#">Privacy</a></li>
            <li className="nav-item"><a className="nav-link" href="#">Cookies</a></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
