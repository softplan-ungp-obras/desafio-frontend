import React, { Fragment, useState } from 'react';

import NewProcessModal from '../NewProcessModal/NewProcessModal';
import {
  NewProcessMessage,
  NewProcessLinkModal
} from './NewProcessLink.styles';

const NewProcessLink = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const handleModal = () => {
    setModalIsOpen(!modalIsOpen);
  };

  return (
    <Fragment>
      <NewProcessMessage>
        Você pode criar um novo processo
        <NewProcessLinkModal onClick={handleModal}>
          clicando aqui
        </NewProcessLinkModal>
      </NewProcessMessage>
      <NewProcessModal modalIsOpen={modalIsOpen} handleModal={handleModal}>
        <div>create process form</div>
      </NewProcessModal>
    </Fragment>
  );
};

export default NewProcessLink;
