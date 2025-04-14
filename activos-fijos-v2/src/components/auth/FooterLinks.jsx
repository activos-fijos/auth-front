import React from 'react';

const FooterLinks = () => {
  return (
    <div className="d-flex fw-semibold text-primary fs-base gap-5">
      <a href="/terms" className="text-hover-primary">Terms</a>
      <a href="/plans" className="text-hover-primary">Plans</a>
      <a href="/contact" className="text-hover-primary">Contact Us</a>
    </div>
  );
};

export default FooterLinks;