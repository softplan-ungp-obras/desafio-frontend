import React, { useEffect, useState } from 'react';
import Modal from 'react-modal';
import PropTypes from 'prop-types';

import device from '../../helpers/breakpoints';
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

  const useMediaQuery = () => {
    const mediaMatch = window.matchMedia(device.mobile);
    const [matches, setMatches] = useState(mediaMatch.matches);

    useEffect(() => {
      const handler = e => setMatches(e.matches);
      mediaMatch.addListener(handler);
      return () => mediaMatch.removeListener(handler);
    });
    return matches;
  };

  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={handleModal}
      style={ModalStyles(useMediaQuery())}
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
