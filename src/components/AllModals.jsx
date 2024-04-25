"use client";
import React, { useState } from "react";
import PictureModal from "./PictureModal";
import TextModal from "./TextModal";

const AllModals = ({ Component, pageProps }) => {
  const [showModal, setShowModal] = useState({
    picture: true,
    text: false,
  });

  const handlePictureModalClose = () => {
    setShowModal((prevModalState) => ({ ...prevModalState, picture: false, text: true }));
  };
  

  return (
    <>
      {showModal.picture && (
        <PictureModal onClose={handlePictureModalClose} />
      )}
      {showModal.text && <TextModal />}
    </>
  );
};

export default AllModals;