import styled, { css } from 'styled-components';
import theme from '~/styles/theme';
import { Title } from '~/components/elements';

export const Box = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: 0.8fr 6.8fr;
  grid-template-rows: 1fr;

  column-gap: 20px;
  ${props =>
    props.edit &&
    css`
      grid-template-columns: 0.8fr 2.8fr 4fr;
    `}
`;
export const List = styled.div`
  padding: 10px;
  box-shadow: 0px 3px 2px ${theme.lighGrey.main};
  border: 2px solid ${theme.lighGrey.main};
  margin-bottom: 25px;

  display: grid;
  grid-template-columns: 0.8fr 2fr 2fr 2fr 2fr;
  grid-template-rows: 1fr;
  align-items: center;
  column-gap: 20px;
  cursor: pointer;
  &:hover {
    transition: all 0.4s ease-in-out;
    background: #f5f5f5;
  }
  &:first-child {
    margin-top: 0;
  }
  img {
    display: block;
  }

  p {
    color: ${theme.grey.main};
    margin-bottom: 15px;
  }

  ${props =>
    props.edit &&
    css`
      grid-template-columns: 1fr 1fr;
      p {
        color: ${theme.grey.main};
        margin-bottom: 5px;
      }
      column-gap: 10px;
      row-gap: 15px;
    `}
  ${props =>
    props.active &&
    css`
      border: 2px solid ${theme.primary.main};
    `}
`;

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: calc(100% - 25px);
  background: rgba(0, 0, 0, 0.2);
  display: flex;
  align-items: center;
  min-height: 100px;
  justify-content: center;
`;

export const NotResult = styled(Title)`
  margin-top: 80px;
`;

export const Relative = styled.div`
  position: relative;
`;
