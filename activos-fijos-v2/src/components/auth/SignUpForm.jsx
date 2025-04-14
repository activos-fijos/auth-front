import React, { useState } from "react";
import Input from "../common/Input";
import PasswordInput from "../common/PasswordInput";

const SignUpForm = () => {
  const [formData, setFormData] = useState({
    email:'',
    password:'',
    confirmPassword:''
  });

  const handleChance = (e) =>{
    const {name, value} = e.target;
    setFormData(prev => ({ ...prev, [name]: value}));
  }

  return (
    <div className="d-flex flex-center flex-column flex-lg-row-fluid">
      <div className="w-lg-500px p-10">
        <form className="form w-100" id="kt_sign_up_form">
          <div className="text-center mb-11">
            <h1 className="text-dark fw-bolder mb-3">Sign Up</h1>
            <div className="text-gray-500 fw-semibold fs-6">
              Your Social Campaigns
            </div>
          </div>

          <Input className="fv-row mb-8" type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChance} />

          <PasswordInput  className="fv-row mb-8" name="password" placeholder="Password" value={formData.password} onChange={handleChance} showMeter={true} />
          
          <PasswordInput className="fv-row mb-8" name="confirmPassword" placeholder="Repeat Password" value={formData.confirmPassword} onChange={handleChance} />

          {/* Términos */}
          <div className="fv-row mb-8">
            <label className="form-check form-check-inline">
              <input className="form-check-input" type="checkbox" />
              <span className="form-check-label fw-semibold text-gray-700 fs-base ms-1">
                I Accept the{" "}
                <a href="#" className="ms-1 link-primary">
                  Terms
                </a>
              </span>
            </label>
          </div>

          {/* Botón */}
          <div className="d-grid mb-10">
            <button type="submit" className="btn btn-primary">
              <span className="indicator-label">Sign up</span>
            </button>
          </div>

          {/* Enlace a Login */}
          <div className="text-gray-500 text-center fw-semibold fs-6">
            Already have an Account?{" "}
            <a href="/login" className="link-primary">
              Sign in
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUpForm;
