import styled from 'styled-components';
import theme from '~/styles/theme';
import { Title } from '~/components/elements';

export const Box = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: 0.8fr 6.8fr;
  grid-template-rows: 1fr;
`;
export const List = styled.div`
  padding: 10px;
  box-shadow: 0px 3px 2px ${theme.lighGrey.main};
  border: 1px solid ${theme.lighGrey.main};
  margin-bottom: 25px;

  display: grid;
  grid-template-columns: 0.8fr 2fr 2fr 2fr 2fr;
  grid-template-rows: 1fr;
  align-items: center;
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
