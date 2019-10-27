import styled, { css } from 'styled-components';
import theme from '~/styles/theme';

export const Box = styled.div`
  input {
    border: 1px solid ${theme.lighGrey.main};
    padding: 15px;
    height: 45px;
    width: 100%;
    box-shadow: 0px 3px 2px ${theme.lighGrey.main};
    color: ${theme.grey.main};
    font-size: 15px;
    font-weight: 600;
  }
`;
export const Header = styled.div``;
