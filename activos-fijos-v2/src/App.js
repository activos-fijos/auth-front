import { Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import LoadingSpinner from "./components/ui/LoadingSpinner";

const LoginPage = lazy(() => import("./components/pages/LoginPage"));
const SignUpPage = lazy(() => import('./components/pages/SignUpPage'));
const NewPasswordPage = lazy(() => import('./components/pages/NewPasswordPage'));
const ResetPasswordPage = lazy(() => import('./components/pages/ResetPasswordPage'));
const TwoFactorPage = lazy(() => import('./components/pages/TwoFactoPage'));

function App() {
  return (
    <Suspense fallback={<LoadingSpinner />}>
      <Routes>
        <Route path="/" element={<LoginPage />} /> {/* Ruta por defecto */}
        <Route path="/singup" element={<SignUpPage />} />
        <Route path="/newpassword" element={<NewPasswordPage />} />
        <Route path="/resetpassword" element={<ResetPasswordPage />} />
        <Route path="/twofactor" element={<TwoFactorPage />} />
      </Routes>
    </Suspense>
  );
}

export default App;
