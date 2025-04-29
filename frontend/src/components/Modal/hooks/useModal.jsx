// custom hook
import { useState } from 'react';

const useModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [modalType, setModalType] = useState('');

  // Open the modal with a specific type (login, signup)
  const openModal = type => {
    setModalType(type); // Set the type of modal (login or signup)
    setIsOpen(true); // Open the modal
  };

  // Close the modal
  const closeModal = () => {
    setIsOpen(false);
    setModalType('');
  };

  return { isOpen, modalType, openModal, closeModal };
};

export default useModal;
