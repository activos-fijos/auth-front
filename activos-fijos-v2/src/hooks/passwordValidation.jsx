// utils/passwordValidation.js
const validatePassword = (password) => {
  return {
    meetsLength: password.length >= 8,
    hasUpperCase: /[A-Z]/.test(password),
    hasNumber: /[0-9]/.test(password),
    hasSpecialChar: /[^A-Za-z0-9]/.test(password),
  };
};

const isPasswordValid = (password) => {
  const checks = validatePassword(password);
  return Object.values(checks).every(Boolean);
};

export default isPasswordValid;
