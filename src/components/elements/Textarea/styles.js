import styled from 'styled-components';
import theme from '~/styles/theme';

export const Box = styled.div`
  position: relative;
  textarea {
    border: 1px solid ${theme.lighGrey.main};
    padding: 15px;
    box-shadow: 0px 3px 2px ${theme.lighGrey.main};
    color: ${theme.grey.main};
    font-size: 15px;
    font-weight: 600;
    resize: none;
    height: 250px;
  }
`;
