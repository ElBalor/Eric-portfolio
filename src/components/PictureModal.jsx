"use client"
import React, { useState } from 'react';
import Modal from './Elbalor';

const PictureModal = () => {
  const [isOpen, setIsOpen] = useState(true);

  const onClose = () => {
    setIsOpen(false);
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} className="w-full bg-black h-screen">
      <div className="p-6 text-lg">
        {/* Add your pictures here */}
        <img src="/Balor.jpg" alt="Dp" className='100vh'/>
      </div>
    </Modal>
  );
};
export default PictureModal;

