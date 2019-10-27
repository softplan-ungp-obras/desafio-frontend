import styled from 'styled-components';
import theme from '~/styles/theme';

export const Box = styled.div`
  box-shadow: 0px 3px 2px ${theme.lighGrey.main};
  border: 1px solid ${theme.lighGrey.main};
  padding: 15px;
  display: grid;
  grid-template-rows: 0.5fr 0.4fr 1fr 1fr;
  max-height: 600px;
  span {
    color: ${theme.grey.main};
  }

  @media (max-width: ${theme.medias.lg}) {
    max-height: initial;
    margin-bottom: 25px;
    display: block;
  }
`;
export const LineOne = styled.div`
  display: grid;
  grid-template-columns: 1.2fr 4.5fr;
  grid-template-rows: 1fr;
  @media (max-width: ${theme.medias.lg}) {
    grid-template-columns: 2fr 4.5fr;
  }
`;
export const LineTwo = styled.div`
  margin-top: 15px;
  ul {
    display: grid;
    margin-top: 5px;
    grid-template-columns: 1fr 1fr;
    row-gap: 6px;
  }
`;
export const LineThree = styled.div`
  margin-top: 25px;
  p {
    margin-top: 5px;
  }
`;
export const LineFour = styled.div`
  flex-grow: 1;
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
  button {
    text-transform: uppercase;
    margin: 0 15px;
    &:last-child {
      margin-right: 0;
    }
  }
  @media (max-width: ${theme.medias.lg}) {
    margin-top: 25px;
  }
`;
export const SubLineOne = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  p {
    font-size: 20px;
    margin-top: 5px;
  }
`;
export const Full = styled.div`
  grid-column: span 2;
`;
