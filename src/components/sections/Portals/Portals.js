import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Modal } from '~/components/elements';
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
      Cadastro de processo
      <FormProcess />
    </Modal>
  );
}
