import styled from 'styled-components';
import colors from '../../helpers/colors';

export const ProcessListHeaderWrapper = styled.div`
  align-items: center;
  display: flex;
  flex-direction: row;
  height: 100%;
  margin: 30px 0 0 0;
  padding: 0 5%;
`;

export const NewProcessButton = styled.button`
  background: ${colors.white};
  border: solid 1px ${colors.black200};
  box-shadow: 0 4px 3px ${colors.black200};
  color: ${colors.black200};
  font: 700 14px 'Montserrat';
  margin: 0 0 0 15px;
  padding: 10px 30px;
  text-transform: uppercase;
  transition: all 0.2s ease-in-out;

  &:hover {
    cursor: pointer;
    background: ${colors.black100};
    color: ${colors.white};
    transition: all 0.2s ease-in-out;
  }
`;

export const HeaderTitle = styled.h2`
  color: ${colors.black300};
  font: 400 20px 'Montserrat';
  margin: 0 30px 0 0;
`;

export const ProcessListWrapper = styled.div``;
