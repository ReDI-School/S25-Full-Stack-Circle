import React from "react";
import pinterestLogo from "/images/pinterest-3.svg";
import { X } from "lucide-react";
import {
  Overlay,
  CloseButton,
  ModalContainer,
  ModalHeader,
  Logo,
} from "./ReusableModalStyles.jsx";

const ReusableModal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;
  return (
    <Overlay onClick={onClose}>
      <ModalContainer onClick={(e) => e.stopPropagation()}>
        <ModalHeader>
          <Logo>
            <img src={pinterestLogo} alt="Pinterest Logo" />
          </Logo>

          <CloseButton onClick={onClose}>
            <X size={24} />
          </CloseButton>
        </ModalHeader>
        {children}
      </ModalContainer>
    </Overlay>
  );
};

export default ReusableModal;
