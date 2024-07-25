import React from 'react';

const Popup = ({ isOpen, onClose,title,note}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-1/3 max-w-md relative">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-800"
        >
          &times;
        </button>
        <h2 className="text-xl font-semibold mb-4">{title}</h2>
        <p>{note}</p>
      </div>
    </div>
  );
};

export default Popup;