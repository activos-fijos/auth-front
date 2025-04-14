import React, { useState } from "react";
import Input from "../common/Input";

const ResetPasswordForm = () => {
  const [formData, setFormData] = useState({
    email: "",
  });

  const handleChance = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="d-flex flex-center flex-column flex-lg-row-fluid">
      <div className="w-lg-500px p-10">
        <form className="form w-100" id="kt_sign_in_form">
          <div class="text-center mb-10">
            <h1 class="text-dark fw-bolder mb-3">Forgot Password ?</h1>
            <div class="text-gray-500 fw-semibold fs-6">
              Enter your email to reset your password.
            </div>
          </div>
          <Input
            className="fv-row mb-8"
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChance}
          />
          <div class="d-flex flex-wrap justify-content-center pb-lg-0">
            <button
              type="button"
              id="kt_password_reset_submit"
              class="btn btn-primary me-4"
            >
              <span class="indicator-label">Submit</span>
              <span class="indicator-progress">
                Please wait...
                <span class="spinner-border spinner-border-sm align-middle ms-2"></span>
              </span>
            </button>
            <a
              href="../../demo9/dist/authentication/layouts/corporate/sign-in.html"
              class="btn btn-light"
            >
              Cancel
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ResetPasswordForm;
