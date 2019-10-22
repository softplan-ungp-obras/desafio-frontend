import styled from 'styled-components';

export const ModalStyles = {
  content: {
    padding: '10px',
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    borderRadius: '0',
    border: 'none',
    boxShadow: '0px 5px 3px rgba(0, 0, 0, 0.3)'
  },
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.6)'
  }
};

export const ContentContainer = styled.div`
  display: flex;
  position: relative;
`;

export const CloseModalButton = styled.button`
  background: none;
  border: none;
  position: absolute;
  right: 0;
  top: 0;

  &:hover {
    cursor: pointer;
  }
`;
