import styled, { css } from 'styled-components';

export const CTitle = styled.div`
width:100%;
h1,h2,h3,h4,h5,h6{
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
  }

`;
