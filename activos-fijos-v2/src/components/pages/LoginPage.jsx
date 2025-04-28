import React from 'react';
import AuthLayout from '../layout/AuthLayout';
import LoginForm from '../auth/forms/LoginForm';
import LanguageMenu from '../auth/LanguageMenu';
import FooterLinks from '../auth/FooterLinks';
import AuthAside from '../auth/AuthAside';
import usePageTitle from '../../hooks/usePageTitle';

const LoginPage = () => {
  usePageTitle('Iniciar Sesión')
  return (
    <AuthLayout>
      <div className="d-flex flex-column flex-lg-row flex-column-fluid">
        <div className="d-flex flex-column flex-lg-row-fluid w-lg-50 p-10 order-2 order-lg-1">
          <LoginForm />
          <div className="w-lg-500px d-flex flex-stack px-10 mx-auto">
            <LanguageMenu />
            <FooterLinks />
          </div>
        </div>
        <AuthAside />
      </div>
    </AuthLayout>
  );
};

export default LoginPage;