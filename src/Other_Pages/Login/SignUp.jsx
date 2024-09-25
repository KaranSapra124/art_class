import React from 'react';
import './SignUp.css';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

const SignUp = () => {
  return (
    <sectionoo id="signup-container" className="container d-flex flex-column vh-100">
      <div className="row align-items-center justify-content-center g-0 h-lg-100 py-8">
        <div id="signup-card-container" className="col-lg-5 col-md-8 py-8 py-xl-0">
          {/* Card */}
          <div id="signup-card" className="card shadow">
            {/* Card body */}
            <div id="signup-card-body" className="card-body p-6 d-flex flex-column gap-4">
              <div>
                <div id="signup-title" className="d-flex flex-column gap-1">
                  <h1 className="mb-0 fw-bold">Sign up</h1>
                  <span>
                    Already have an account?
                    <Link to="/art_class/login" id="signin-link" className="ms-1">Sign in</Link> {/* Use Link here */}
                  </span>
                </div>
              </div>
              {/* Form */}
              <form id="signup-form" className="needs-validation" noValidate>
                {/* Username */}
                <div id="username-container" className="mb-3">
                  <label htmlFor="signUpName" className="form-label">User Name</label>
                  <input
                    type="text"
                    id="signUpName"
                    className="form-control"
                    name="signUpName"
                    placeholder="User Name"
                    required
                  />
                  <div className="invalid-feedback">Please enter a valid username.</div>
                </div>
                {/* Email */}
                <div id="email-container" className="mb-3">
                  <label htmlFor="signUpEmail" className="form-label">Email</label>
                  <input
                    type="email"
                    id="signUpEmail"
                    className="form-control"
                    name="signUpEmail"
                    placeholder="Email address here"
                    required
                  />
                  <div className="invalid-feedback">Please enter a valid email.</div>
                </div>
                {/* Password */}
                <div id="password-container" className="mb-3">
                  <label htmlFor="signUpPassword" className="form-label">Password</label>
                  <input
                    type="password"
                    id="signUpPassword"
                    className="form-control"
                    name="signUpPassword"
                    placeholder="**************"
                    required
                  />
                  <div className="invalid-feedback">Please enter a valid password.</div>
                </div>
                {/* Checkbox */}
                <div id="terms-container" className="mb-3">
                  <div className="form-check">
                    <input type="checkbox" className="form-check-input" id="agreeCheck" required />
                    <label className="form-check-label" htmlFor="agreeCheck">
                      <span>
                        I agree to the
                        <a href="terms-condition-page.html">Terms of Service</a> and
                        <a href="terms-condition-page.html">Privacy Policy</a>.
                      </span>
                    </label>
                    <div className="invalid-feedback">You must agree before submitting.</div>
                  </div>
                </div>
                <div>
                  {/* Button */}
                  <div id="signup-button-container" className="d-grid">
                    <button type="submit" id="signup-button" className="btn btn-primary">Create Free Account</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </sectionoo>
  );
};

export default SignUp;
