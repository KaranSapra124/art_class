import React from 'react';
import './Pricing.css';
import price_bk from '../../assets/price_bk.jpg'
import { Link } from 'react-router-dom';

const Pricing = () => {
  return (
    <div className="container">
    <hr className="featurette-divider" />
      <div className="row mb-5 justify-content-center text-center">
        <div className="col-lg-8 col-md-10">
          <h2 className="mt-4">Simple, Straight Pricing</h2>
          <div className="mt-2">
            <p className="lead lh-180">Starting with a free tier for hobbyists and beginners. Advanced plans offer premium features such as personalized feedback, exclusive materials, and one-on-one mentoring, designed for aspiring artists and professionals
            </p>
          </div>
        </div>
      </div>

      <div className="row justify-content-center">
        <div className="col-lg-4 col-md">
          <div className="card card-pricing text-center px-3 hover-scale-110 card-marg">
            <div className="card-header py-5 border-0 delimiter-bottom">
              <div className="h1 text-center mb-0">Rs.<span className="price font-weight-bolder">1999/-</span></div>
              <span className="h6 text-muted">Standard Course</span>
            </div>
            <div className="card-body">
              <ul className="list-unstyled text-sm mb-4">
                <li>Flat 599/-off</li>
                <li>Extra 20 Sessions</li>
                <li>Youtube Support</li>
                <li>one-to-one Support</li>
              </ul>
              <Link to="/art_class/Formenroll">
              <a id='first_btn'className="btn btn-sm btn-warning hover-translate-y-n3 hover-shadow-lg mb-3" target="_blank" rel="noopener noreferrer">Enroll Now</a>
              </Link>
            </div>
          </div>
        </div>

        <div className="col-lg-4 col-md">
          <div className="card card-pricing bg-primary text-center px-3 border-0 hover-scale-110 card-marg">
            <div className="card-header py-5 border-0 delimiter-bottom">
              <div className="h1 text-white text-center mb-0">Rs.<span className="price font-weight-bolder">3999/-</span></div>
              <span className="h6 text-white">Premium</span>
            </div>
            <div className="card-body" id='body-cl'>
              <ul className="list-unstyled text-white text-sm opacity-8 mb-4">
                <li>Flat 799/-off</li>
                <li>Extra 50 Sessions</li>
                <li>Youtube Support</li>
                <li>one-to-one Personalized</li>
                <li>6 months technical support</li>
              </ul>
              <Link to="/art_class/Formenroll">
              <a id='second_btn' className="btn btn-sm btn-primary hover-translate-y-n3 hover-shadow-lg mb-3" target="_blank" rel="noopener noreferrer">
                Enroll Now
              </a>
              </Link>

            </div>
          </div>
        </div>
      </div>

      <div className="mt-4 text-center">
        
        <p className="mb-2">Both pricings contain all 6 months free support. Need more?</p>
       <Link to="/art_class/contact">
        <a className="text-primary" target="_blank" id='name-con'>
          Contact us
        </a></Link>
      </div>
    </div>
    
  );
};

export default Pricing;
