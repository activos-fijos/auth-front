import React from 'react';
import AuthLayout from '../layout/AuthLayout';
import AuthAside from '../auth/AuthAside';
import LanguageMenu from '../auth/LanguageMenu';
import FooterLinks from '../auth/FooterLinks';
import SignUpForm from '../auth/forms/SignUpForm';
import usePageTitle from '../../hooks/usePageTitle';

const SignUpPage = () => {
  usePageTitle('Registrarse')
    return (
      <AuthLayout>
        <div className="d-flex flex-column flex-lg-row flex-column-fluid">
          <div className="d-flex flex-column flex-lg-row-fluid w-lg-50 p-10 order-2 order-lg-1">
            <SignUpForm />
            <div className="w-lg-500px d-flex flex-stack px-10 mx-auto">
              <LanguageMenu />
              <FooterLinks />
            </div>
          </div>
          <AuthAside />
        </div>
      </AuthLayout>
    );
}

export default SignUpPage;