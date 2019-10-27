import styled, { css } from 'styled-components';
import theme from '~/styles/theme';

export const Box = styled.div`
  padding: 5px 10px;
  border-radius: 3px;
  font-size: 12px;
  display: table;
  border-top: 3px solid #900000;
  margin-top: 0;

  color: ${theme.white.main}
    ${props =>
      props.type === 'error' &&
      css`
        background: ${theme.error.main};
      `}
    ${props =>
      props.type === 'success' &&
      css`
        background: ${theme.sucess.main};
      `};
`;
