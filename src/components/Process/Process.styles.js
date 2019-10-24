import styled from 'styled-components';
import colors from '../../helpers/colors';

export const ProcessRow = styled.div`
  align-items: center;
  border: solid 1px ${colors.black100};
  box-shadow: 0px 5px 3px ${colors.black100};
  display: flex;
  padding: 10px;
  width: 100%;
`;

export const ProcessColumn = styled.div`
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
  margin-bottom: 5px;
`;

export const ColumnText = styled.p`
  color: ${colors.black300};
  font: 400 14px 'Montserrat';
  margin-top: 0;
`;
