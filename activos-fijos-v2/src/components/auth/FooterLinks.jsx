import React from 'react';

const FooterLinks = () => {
  return (
    <div className="d-flex fw-semibold text-primary fs-base gap-5">
      <a href="/terms" className="text-hover-primary">Términos</a>
      <a href="/plans" className="text-hover-primary">Planes</a>
      <a href="/contact" className="text-hover-primary">Contacta con nosotros</a>
    </div>
  );
};

export default FooterLinks;