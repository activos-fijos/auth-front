import React, { useState } from "react";

const TwoFactorForm = () => {
  const [formData, setFormData] = useState({
    code_1: "",
    code_2: "",
    code_3: "",
    code_4: "",
    code_5: "",
    code_6: "",
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
            <img
              alt="Logo"
              class="mh-125px"
              src="assets/media/svg/misc/smartphone-2.svg"
            />
          </div>
          <div class="text-center mb-10">
            <h1 class="text-dark mb-3">Verificación de dos pasos</h1>
            <div class="text-muted fw-semibold fs-5 mb-5">
              Ingrese el código de verificación que le enviamos a
            </div>
            <div class="fw-bold text-dark fs-3">******7859</div>
          </div>
          <div class="mb-10">
            <div class="fw-bold text-start text-dark fs-6 mb-1 ms-1">
              Escriba su código de seguridad de 6 dígitos
            </div>
            <div class="d-flex flex-wrap flex-stack">
              <input
                type="text"
                name="code_1"
                data-inputmask="'mask': '9', 'placeholder': ''"
                maxlength="1"
                class="form-control bg-transparent h-60px w-60px fs-2qx text-center mx-1 my-2"
                value={formData.code_1}
                onChange={handleChance}
              />
              <input
                type="text"
                name="code_2"
                data-inputmask="'mask': '9', 'placeholder': ''"
                maxlength="1"
                class="form-control bg-transparent h-60px w-60px fs-2qx text-center mx-1 my-2"
                value={formData.code_2}
                onChange={handleChance}
              />
              <input
                type="text"
                name="code_3"
                data-inputmask="'mask': '9', 'placeholder': ''"
                maxlength="1"
                class="form-control bg-transparent h-60px w-60px fs-2qx text-center mx-1 my-2"
                value={formData.code_3}
                onChange={handleChance}
              />
              <input
                type="text"
                name="code_4"
                data-inputmask="'mask': '9', 'placeholder': ''"
                maxlength="1"
                class="form-control bg-transparent h-60px w-60px fs-2qx text-center mx-1 my-2"
                value={formData.code_4}
                onChange={handleChance}
              />
              <input
                type="text"
                name="code_5"
                data-inputmask="'mask': '9', 'placeholder': ''"
                maxlength="1"
                class="form-control bg-transparent h-60px w-60px fs-2qx text-center mx-1 my-2"
                value={formData.code_5}
                onChange={handleChance}
              />
              <input
                type="text"
                name="code_6"
                data-inputmask="'mask': '9', 'placeholder': ''"
                maxlength="1"
                class="form-control bg-transparent h-60px w-60px fs-2qx text-center mx-1 my-2"
                value={formData.code_6}
                onChange={handleChance}
              />
            </div>
          </div>
          <div class="d-flex flex-center">
            <button
              type="button"
              id="kt_sing_in_two_factor_submit"
              class="btn btn-lg btn-primary fw-bold mb-5"
            >
              <span class="indicator-label">Enviar</span>
              <span class="indicator-progress">
                Please wait...
                <span class="spinner-border spinner-border-sm align-middle ms-2"></span>
              </span>
            </button>
          </div>
        </form>
        <div class="text-center fw-semibold fs-5">
          <span class="text-muted me-1">¿No recibiste el código?</span>
          <span class="link-primary fs-5 me-1 cursor-pointer">
            Reenviar
          </span>
          <span class="text-muted me-1">o</span>
          <span class="link-primary fs-5 cursor pointer">
            Llámanos
          </span>
        </div>
      </div>
    </div>
  );
};

export default TwoFactorForm;
