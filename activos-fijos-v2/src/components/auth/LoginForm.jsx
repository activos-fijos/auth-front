import React from 'react';

const LoginForm = () => {
  return (
    <div className="d-flex flex-center flex-column flex-lg-row-fluid">
      <div className="w-lg-500px p-10">
        <form className="form w-100" id="kt_sign_in_form">
          <div className="text-center mb-11">
            <h1 className="text-dark fw-bolder mb-3">Sign In</h1>
            <div className="text-gray-500 fw-semibold fs-6">Your Social Campaigns</div>
          </div>

          <div className="fv-row mb-8">
            <input 
              type="text" 
              placeholder="Email" 
              className="form-control bg-transparent" 
            />
          </div>
          
          <div className="fv-row mb-3">
            <input 
              type="password" 
              placeholder="Password" 
              className="form-control bg-transparent" 
            />
          </div>

          <div className="d-flex flex-stack flex-wrap gap-3 fs-base fw-semibold mb-8">
            <div></div>
            <a href="#" className="link-primary">Forgot Password?</a>
          </div>

          <div className="d-grid mb-10">
            <button type="submit" className="btn btn-primary">
              <span className="indicator-label">Sign In</span>
            </button>
          </div>

          <div className="text-gray-500 text-center fw-semibold fs-6">
            Not a Member yet? <a href="/singup" className="link-primary">Sign up</a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;