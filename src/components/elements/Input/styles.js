import styled, { css } from 'styled-components';
import theme from '~/styles/theme';

export const Box = styled.div`
  position: relative;
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

  ${props =>
    props.level === 'normal' &&
    css`
      input {
        height: 35px;
      }
    `}
`;
export const Icon = styled.span`
  position: absolute;
  top: 55%;
  transform: translate(0, -50%);
  right: 10px;
  font-size: 24px;
  color: ${theme.grey.main};
  ${props =>
    props.iconPointer &&
    css`
      cursor: pointer;
    `}
`;
