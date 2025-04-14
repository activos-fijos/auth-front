import { Routes, Route } from 'react-router-dom';
import LoginPage from './components/pages/LoginPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} /> {/* Ruta por defecto */}
    </Routes>
  );
}

export default App;