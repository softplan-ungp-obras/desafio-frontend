import styled from 'styled-components';
import theme from '~/styles/theme';

export const Box = styled.ul`
  position: relative;
  display: block;
`;
export const List = styled.li`
  padding: 15px;
  box-shadow: 0px 3px 2px ${theme.lighGrey.main};
  border: 1px solid ${theme.lighGrey.main};
  margin: 25px 0;

  display: grid;
  grid-template-columns: 0.8fr 2fr 2fr 2fr 2fr;
  grid-template-rows: 1fr;
  align-items: center;

  p {
    color: ${theme.grey.main};
    margin-bottom: 15px;
  }
`;

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 400px;
`;
