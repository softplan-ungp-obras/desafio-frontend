import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Modal, Title } from '~/components/elements';
import { FormProcess } from '~/components/blocks';
import { Creators as PortalActions } from '~/store/ducks/portals';

export default function Portals() {
  const open = useSelector(state => state.portals.modal);
  const dispatch = useDispatch();

  function handleModal() {
    dispatch(PortalActions.setModal(false));
  }

  return (
    <Modal open={open} onClose={handleModal}>
      <Title as="2" level="title">
        Cadastro de processo
      </Title>
      <FormProcess />
    </Modal>
  );
}
