import styled from 'styled-components';
import theme from '~/styles/theme';

export const Box = styled.div`
  input {
    height: 35px;
    border-color: transparent;
    border-bottom: 2px solid ${theme.grey.main};
    padding: 15px;
    height: 45px;
    width: 100%;
    color: ${theme.grey.main};
    font-size: 15px;
    font-weight: 600;
  }
`;

export const Header = styled.div`
  margin-bottom: 15px;
  span {
    font-size: 12px;
  }
  svg {
    color: ${theme.error.main};
    cursor: pointer;
    width: 14px;
  }
`;

export const Line = styled.div`
  display: flex;
  button {
    text-transform: uppercase;
    font-weight: 900;
    margin-left: 25px;
    line-height: normal;
    height: auto;
    padding: 5px 10px;
  }
`;
