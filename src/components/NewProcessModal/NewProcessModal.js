import React from 'react';
import Modal from 'react-modal';
import PropTypes from 'prop-types';

import colors from '../../helpers/colors';

import CloseIcon from './CloseIcon';

import {
  ModalStyles,
  CloseModalButton,
  ContentContainer
} from './NewProcessModal.styles';

const NewProcessModal = props => {
  const { handleModal, modalIsOpen } = props;
  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={handleModal}
      style={{ ...ModalStyles }}
      ariaHideApp={false}
    >
      <ContentContainer>
        <div>create process form</div>
        <CloseModalButton onClick={handleModal}>
          <CloseIcon size="20px" color={colors.black300} />
        </CloseModalButton>
      </ContentContainer>
    </Modal>
  );
};

NewProcessModal.propTypes = {
  modalIsOpen: PropTypes.bool,
  handleModal: PropTypes.func
};

export default NewProcessModal;
