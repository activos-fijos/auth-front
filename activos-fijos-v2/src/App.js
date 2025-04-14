import { Routes, Route } from 'react-router-dom';
import LoginPage from './components/pages/LoginPage';
import SignUpPage from './components/pages/SignUpPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} /> {/* Ruta por defecto */}
      <Route path="/singup" element={<SignUpPage />} />
    </Routes>
  );
}

export default App;