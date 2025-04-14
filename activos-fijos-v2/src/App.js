import { Routes, Route } from 'react-router-dom';
import LoginPage from './components/pages/LoginPage';
import SignUpPage from './components/pages/SignUpPage';
import NewPasswordPage from './components/pages/NewPasswordPage';
import ResetPasswordPage from './components/pages/ResetPasswordPage';
import TwoFactorPage from './components/pages/TwoFactoPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} /> {/* Ruta por defecto */}
      <Route path="/singup" element={<SignUpPage />} />
      <Route path="/newpassword" element={<NewPasswordPage />} />
      <Route path="/resetpassword" element={<ResetPasswordPage />} />
      <Route path="/twofactor" element={<TwoFactorPage />} />
    </Routes>
  );
}

export default App;