import styled, { css } from 'styled-components';
import theme from '~/styles/theme';

export const ButtonStyle = styled.button`
  color: ${theme.white.main};
  padding: 14px 15px;
  height: 45px;
  box-shadow: 0px 3px 2px ${theme.lighGrey.main};
  min-width: 120px;
  font-weight: bold;
  transition: all 0.1s ease-in-out;

  ${props =>
    props.level === 'primary' &&
    css`
      border: 1px solid ${theme.primary.main};
      background: ${theme.primary.main};
      &:hover {
        background: ${theme.primary.hover};
        transition: all 0.2s ease-in-out;
      }
    `}
  ${props =>
    props.level === 'error' &&
    css`
      border: 1px solid ${theme.error.main};
      color: ${theme.error.main};
      background: transparent;
      &:hover {
        border: 1px solid ${theme.error.main};
        color: ${theme.error.main};
      }
    `}
  ${props =>
    props.level === 'grey' &&
    css`
      border: 1px solid ${theme.lighGrey.main};
      color: ${theme.grey.main};
      background: transparent;
      &:hover {
        border: 1px solid ${theme.grey.main};
        color: ${theme.grey.main};
      }
    `}

    ${props =>
      props.disabled &&
      css`
        background: ${theme.lighGrey.main};
        color: ${theme.black.main};
        border: 1px solid ${theme.lighGrey.main};
        cursor: none;
        &:hover {
          background: ${theme.lighGrey.main};
          color: ${theme.lighGrey.main};
          cursor: initial;
        }
      `}

`;
