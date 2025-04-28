// LoadingSpinner.js con CSS normal
import React from 'react';
import './LoadingSpinner.css'; // Crearemos este archivo después

export default function LoadingSpinner() {
  return (
    <div className="spinner-container">
      <div className="spinner"></div>
    </div>
  );
}