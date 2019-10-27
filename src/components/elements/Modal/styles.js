import styled from 'styled-components';
import Modal from 'react-modal';
import theme from '~/styles/theme';

export const Close = styled.button`
  border: none;
  background: none;
  position: absolute;
  color: ${theme.grey.main};
  font-size: 28px;
  top: 15px;
  right: 15px;
`;

export const ModalStyle = styled(Modal)`
  margin-top: -100px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${theme.white.main};
  overflow-x: hidden;
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
  padding: 1.2rem;
  z-index: 1031;
  max-width: 800px;
  width: 100%;
  margin: auto;
  flex-direction: column;
  text-align: left;
  position: relative;
`;
