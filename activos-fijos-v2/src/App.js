import { Routes, Route } from 'react-router-dom';
import LoginPage from './components/pages/LoginPage';
import SignUpPage from './components/pages/SignUpPage';
import NewPasswordPage from './components/pages/NewPasswordPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} /> {/* Ruta por defecto */}
      <Route path="/singup" element={<SignUpPage />} />
      <Route path="/newpassword" element={<NewPasswordPage />} />
    </Routes>
  );
}

export default App;