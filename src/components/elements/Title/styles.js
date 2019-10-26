import styled, { css } from 'styled-components';

export const CTitle = styled.div`
  ${props =>
    props.level === 'headline' &&
    css`
      font-size: 24px;
    `}
  ${props =>
    props.level === 'title' &&
    css`
      font-size: 20px;
    `}
  ${props =>
    props.level === 'subtitle' &&
    css`
      font-size: 20px;
      font-weight: bold;
    `}
  ${props =>
    props.level === 'label' &&
    css`
      font-size: 14px;
      font-weight: bold;
    `}
`;
