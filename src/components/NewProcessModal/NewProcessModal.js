import React from 'react';
import Modal from 'react-modal';
import PropTypes from 'prop-types';

import colors from '../../helpers/colors';

import CloseIcon from './CloseIcon';
import NewProcessForm from '../NewProcessForm/NewProcessForm';

import {
  ModalStyles,
  CloseModalButton,
  ContentContainer
} from './NewProcessModal.styles';

const NewProcessModal = props => {
  const { handleModal, modalIsOpen, fromProcess } = props;
  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={handleModal}
      style={{ ...ModalStyles }}
      ariaHideApp={false}
    >
      <ContentContainer>
        <NewProcessForm fromProcess={fromProcess} />
        <CloseModalButton onClick={handleModal}>
          <CloseIcon size="20px" color={colors.black200} />
        </CloseModalButton>
      </ContentContainer>
    </Modal>
  );
};

NewProcessModal.propTypes = {
  modalIsOpen: PropTypes.bool,
  handleModal: PropTypes.func,
  fromProcess: PropTypes.bool
};

export default NewProcessModal;
