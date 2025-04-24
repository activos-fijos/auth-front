import React from "react";

const AuthAside = () => {
  return (
    <div
      className="d-flex flex-lg-row-fluid w-lg-50 bgi-size-cover bgi-position-center order-1 order-lg-2"
      style={{
        backgroundImage: `url(${process.env.PUBLIC_URL}/assets/media/misc/auth-bg.png)`,
      }}
    >
      <div className="d-flex flex-column flex-center py-7 py-lg-15 px-5 px-md-15 w-100">
        <img
          alt="Logo"
          src={`${process.env.PUBLIC_URL}/assets/media/logos/custom-1.png`}
          className="h-60px h-lg-75px mb-0 mb-lg-12"
        />

        <img
          className="d-none d-lg-block mx-auto w-275px w-md-50 w-xl-500px mb-10 mb-lg-20"
          src={`${process.env.PUBLIC_URL}/assets/media/misc/auth-screens.png`}
          alt="Auth screens"
        />

        <h1 className="d-none d-lg-block text-white fs-2qx fw-bolder text-center mb-7">
          Rápida, eficiente y productiva
        </h1>

        <div className="d-none d-lg-block text-white fs-base text-center">
          En este tipo de publicación, el bloguero presenta a una persona que ha
          entrevistado y proporciona información de fondo.
        </div>
      </div>
    </div>
  );
};

export default AuthAside;
