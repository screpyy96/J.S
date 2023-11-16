import React, { useState } from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import styled from 'styled-components';

const Button = styled.button`
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  z-index: 99;
  background-color: #25d366;
  color: #fff;
  border: none;
  border-radius: 5px;
  padding: 0.5rem 1rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #128c7e;
  }

  @media (max-width: 600px) {
    bottom: 20rem;
    right: 2rem;
  }
`;


const PopUp = styled.div`
  position: fixed;
  bottom: 4rem;
  right: 6rem;
  background-color: #128c7e;
  color: #fff;
  border-radius: 5px;
  padding: 0.5rem 1rem;
  display: ${({ show }) => (show ? 'block' : 'none')};
  z-index: 99;
  @media (max-width: 600px) {
    bottom: 23rem;
    right: 2rem;
    width: 5rem;
    // padding: 0.2
    display: none;
  }
`;


const CloseButton = styled.button`
  position: absolute;
  top: -2rem;
  right: -1rem;
  background: none;
  border: none;
  color: black;
  cursor: pointer;
    z-index: 99;
`;

const WhatsAppChat = () => {
  const [showPopUp, setShowPopUp] = useState(false);

  const handleClick = () => {
    const whatsappNumber = '+447930097259';
    const preFilledMessage = 'Hello! I need assistance.';
    const encodedMessage = encodeURIComponent(preFilledMessage);
    const whatsappURL = `https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${encodedMessage}`;
    window.open(whatsappURL, '_blank');
  };

  setTimeout(() => {
    setShowPopUp(true);
  }, 5000);

  const handleClose = () => {
    setShowPopUp(false);
  };

  return (
    <>
      <Button onClick={handleClick}>
        <FaWhatsapp />
      </Button>
      <PopUp show={showPopUp}>
        Need assistance? Chat with us on WhatsApp!
        <CloseButton onClick={handleClose}>x</CloseButton>
      </PopUp>
    </>
  );
};

export default WhatsAppChat;
