import React, { useState } from "react";
import PasswordInput from "../common/PasswordInput";

const NewPasswordForm = () => {
  const [formData, setFormData] = useState({
    password: "",
    newPassword: "",
  });

  const handleChance = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="d-flex flex-center flex-column flex-lg-row-fluid">
      <div className="w-lg-500px p-10">
        <form className="form w-100" id="kt_new_password_form">
          <div class="text-center mb-10">
            <h1 class="text-dark fw-bolder mb-3">Setup New Password</h1>
            <div class="text-gray-500 fw-semibold fs-6">
              Have you already reset the password ?
              <a href="/" class="link-primary fw-bold">
                Sign in
              </a>
            </div>
          </div>
          <PasswordInput
            className="fv-row mb-8"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChance}
            showMeter={true}
          />

          <PasswordInput
            className="fv-row mb-8"
            name="newPassword"
            placeholder="Repeat Password"
            value={formData.newPassword}
            onChange={handleChance}
          />
          <div class="fv-row mb-8">
            <label class="form-check form-check-inline">
              <input
                class="form-check-input cursor-pointer"
                type="checkbox"
                name="toc"
                value="1"
              />
              <span class="form-check-label fw-semibold text-gray-700 fs-6 ms-1">
                I Agree &
                <a href="#" class="ms-1 link-primary">
                  Terms and conditions
                </a>
                .
              </span>
            </label>
          </div>
          <div class="d-grid mb-10">
            <button
              type="button"
              class="btn btn-primary"
            >
              <span class="indicator-label">Submit</span>
              <span class="indicator-progress">
                Please wait...
                <span class="spinner-border spinner-border-sm align-middle ms-2"></span>
              </span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default NewPasswordForm;
