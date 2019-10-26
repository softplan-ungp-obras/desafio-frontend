import styled from 'styled-components';
import colors from '../../helpers/colors';

export const ProcessWrapper = styled.div`
  border: solid 1px ${colors.black100};
  box-shadow: 0px 5px 3px ${colors.black100};
  display: flex;
  flex: 1;
  flex-wrap: wrap;
  padding: 10px;
`;

export const ProcessHeader = styled.div`
  align-items: flex-start;
  display: flex;
  margin-bottom: 20px;
  width: 100%;
`;

export const ProcessHeaderInfo = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const ImageWrapper = styled.div`
  margin-right: 10px;
`;

export const HeaderInfoWrapper = styled.div`
  margin: 0 20px 5px 0;
  width: ${props => (props.width ? props.width : 'auto')};
`;

export const HeaderInfoLabel = styled.p`
  color: ${colors.black200};
  font: 700 14px 'Montserrat';
  margin-top: ${props => (props.isListReduced ? '0' : 'inherit')};
  margin-bottom: 5px;
`;

export const HeaderInfoText = styled.p`
  color: ${colors.black300};
  font: 400 20px 'Montserrat';
  margin-top: 0;
  margin-bottom: ${props => (props.isListReduced ? '5px' : 'inherit')};
`;

export const InterestedList = styled.ul`
  color: ${colors.black300};
  font: 400 16px 'Montserrat';
  columns: 2;
  list-style: none;
  padding: 0;
  margin-top: 0;
  width: 100%;
`;

export const DescriptionWrapper = styled.div`
  width: 100%;
`;

export const ProcessActions = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 30px;
  width: 100%;
`;

export const EditButton = styled.button`
  background: ${colors.white};
  border: solid 1px ${colors.primary};
  box-shadow: 0 4px 3px ${colors.black100};
  color: ${colors.primary};
  font: 700 14px 'Montserrat';
  margin: 0 0 0 15px;
  padding: 10px 30px;
  text-transform: uppercase;
  transition: all 0.2s ease-in-out;

  &:hover {
    cursor: pointer;
    background: ${colors.primary};
    color: ${colors.white};
    transition: all 0.2s ease-in-out;
  }
`;
