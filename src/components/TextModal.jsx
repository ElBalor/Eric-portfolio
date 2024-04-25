"use client"
import React, { useState } from 'react';
import Modal from './Elbalor';

const TextModal = () => {
  const [isOpen, setIsOpen] = useState(true);

  const onClose = () => {
    setIsOpen(false);
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} className="w-full bg-black h-screen">
      <div className="p-6 text-lg">
        {/* Add your text here */}
        <h1 className='text-center font-bold text-3xl mb-3 shadow-2xl move-gradient-text'>Arch Angel</h1>
        <p className='text-xl font-semi-bold text-amber-400 text-glass-sm'>My name is Eric Yaka AKA ElBalor and I am a Software Developer with wonderful skills and Experience</p>
      </div>
    </Modal>
  );
};

export default TextModal;
