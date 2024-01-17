// Popup.js
import React from 'react';

const Popup = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="popup">
      <div className="popup-content">
        <span className="close" onClick={onClose}>
          &times;
        </span>
        <p>Your popup content goes here!</p>
      </div>
    </div>
  );
};

export default Popup;
