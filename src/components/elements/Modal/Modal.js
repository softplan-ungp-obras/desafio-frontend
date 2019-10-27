import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { MdClose } from 'react-icons/md';
import { Close, ModalStyle } from './styles';

function Modal({ children, open, onClose }) {
  return (
    <ModalStyle isOpen={open} onRequestClose={onClose}>
      <Close type="button" onClick={onClose}>
        <MdClose />
      </Close>
      {children}
    </ModalStyle>
  );
}

Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
};

export default Modal;
