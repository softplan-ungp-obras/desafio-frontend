import styled, { css } from 'styled-components';

export const CText = styled.div`
  ${props =>
    props.as === 'label' &&
    css`
      font-size: 14px;
      text-transform: uppercase;
    `}
  ${props =>
    props.level === '1' &&
    css`
      font-size: 18px;
    `}
  ${props =>
    props.as === '2' &&
    css`
      font-size: 16px;
    `}
  ${props =>
    props.as === '3' &&
    css`
      font-size: 14px;
    `}
  ${props =>
    props.as === '4' &&
    css`
      font-size: 12px;
    `}
`;
