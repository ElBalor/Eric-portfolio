import React from 'react';

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 overflow-y-auto bg-black/50"
      aria-labelledby="modal-title"
      aria-modal="true"
      role="dialog"
    >
      <div className="flex items-center justify-center min-h-screen">
        <div className="relative p-4 w-full max-w-md h-full md:h-auto">
          <div className="relative bg-white/ rounded-lg dark:bg-gradient-to-br dark:from-blue-800/35 shadow-2xl dark:to-cyan-700 dark:custom-lg">
            {children}
            <button
              className="absolute top-3 right-2.5 rounded-full bg-gray-700  text-gray-400 hover:bg-gray-200 hover:text-gray-900  text-sm p-1.5 ml-auto inline-flex items-center"
              onClick={onClose}
            >
              <svg
                className="w-8 h-9 p-1 animate-pulse text-white"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="(link unavailable)"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;

