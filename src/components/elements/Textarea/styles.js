import styled from 'styled-components';
import theme from '~/styles/theme';

export const Box = styled.div`
  position: relative;
  textarea {
    border-color: transparent;
    border-bottom: 2px solid ${theme.grey.main};
    padding: 15px;
    color: ${theme.grey.main};
    font-size: 15px;
    font-weight: 600;
    resize: none;
    height: 80px;
    display: block;
    width: 100%;
  }
`;
