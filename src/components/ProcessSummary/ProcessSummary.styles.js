import styled from 'styled-components';
import colors from '../../helpers/colors';

export const ProcessRow = styled.div`
  align-items: center;
  border: ${props =>
    props.isProcessActive
      ? `solid 1px ${colors.primary}`
      : `solid 1px ${colors.black100}`};
  box-shadow: 0px 5px 3px ${colors.black100};
  display: flex;
  padding: 10px;
`;

export const ProcessColumn = styled.div`
  display: ${props => (props.isListReduced ? 'none' : 'block')};
  margin: ${props => (props.margin ? props.margin : '0 20px 0 0')};

  p {
    overflow: hidden;
    max-width: 200px;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
`;

export const ColumnHeader = styled.p`
  font: 700 14px 'Montserrat';
  color: ${props =>
    props.isProcessActive ? `${colors.primary}` : `${colors.black200}`};
  margin-top: ${props => (props.isListReduced ? '0' : 'inherit')};
  margin-bottom: 5px;
`;

export const ColumnText = styled.p`
  color: ${props =>
    props.isProcessActive ? `${colors.primary}` : `${colors.black300}`};
  font: 400 14px 'Montserrat';
  margin-top: 0;
  margin-bottom: ${props => (props.isListReduced ? '5px' : 'inherit')};
`;

export const LinkStyles = {
  color: 'inherit',
  display: 'flex',
  flexWrap: 'wrap',
  textDecoration: 'none',
  width: '100%'
};
