import styled from 'styled-components';
import device from '../../helpers/breakpoints';

export const List = styled.ul`
  list-style: none;
  margin: ${props => (props.isListReduced ? '0 20px 0 130px' : '0 0 0 130px')};
  padding: 0;
  width: ${props => (props.isListReduced ? '30%' : '75%')};

  @media ${device.mobile} {
    margin: 0 20px;
    width: auto;
  }
`;

export const ListItem = styled.li`
  margin: 0 0 20px 0;

  @media ${device.mobile} {
    margin-right: 15px;
    max-width: 100%;
  }
`;

export const NoResults = styled.div`
  text-align: center;
  width: 50%;
`;
