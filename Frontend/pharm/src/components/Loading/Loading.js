import React from 'react';
import './Loading.css';

const Loading = () => (
  <div className="loading-overlay">
    <div className="spinner"></div>
    <svg
      className="tablet-icon"
      xmlns="http://www.w3.org/2000/svg"
      width="60"
      height="60"
      viewBox="0 0 24 24"
    >
      <path d="M17 0H7C5.34 0 4 1.34 4 3v18c0 1.66 1.34 3 3 3h10c1.66 0 3-1.34 3-3V3c0-1.66-1.34-3-3-3zm1 21H6V3h12v18zm-6-1h-4v-1h4v1zm0-2h-4v-1h4v1zm5-11h-5V6h5v1z" />
    </svg>
    <h2>Loading...</h2>
  </div>
);

export default Loading;