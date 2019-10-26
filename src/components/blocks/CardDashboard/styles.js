import styled from 'styled-components';
import theme from '~/styles/theme';

export const Box = styled.div`
  box-shadow: 0px 3px 2px ${theme.lighGrey.main};
  border: 1px solid ${theme.lighGrey.main};
  padding: 15px;
  span {
    color: ${theme.grey.main};
  }
`;
export const LineOne = styled.div`
  display: grid;
  grid-template-columns: 1fr 4.5fr;
  grid-template-rows: 1fr;
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
