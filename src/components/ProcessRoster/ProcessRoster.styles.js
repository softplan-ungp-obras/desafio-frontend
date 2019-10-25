import styled from 'styled-components';

export const List = styled.ul`
  list-style: none;
  margin: ${props => (props.isListReduced ? '0 20px 0 130px' : '0 0 0 130px')};
  padding: 0;
  width: ${props => (props.isListReduced ? '30%' : '75%')};
`;

export const ListItem = styled.li`
  margin: 0 0 20px 0;
`;
