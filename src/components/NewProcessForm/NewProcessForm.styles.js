import styled from 'styled-components';
import colors from '../../helpers/colors';

export const Label = styled.label`
  color: ${colors.black200};
  display: block;
  font-size: 12px;
  width: 100%;
`;

export const Title = styled.h2`
  color: ${colors.black300};
  font: normal 20px 'Montserrat';
  margin: 0 0 30px 0;
`;

export const FormInput = styled.input`
  background: none;
  border: none;
  border-bottom: solid 1px ${colors.black200};
  color: ${colors.black300};
  font: normal 14px 'Montserrat';
  margin-right: 10px;
  padding: 3px;
  width: 69%;
`;

export const FormTextArea = styled.textarea`
  background: none;
  border: none;
  border-bottom: solid 1px ${colors.black300};
  color: ${colors.black300};
  font: normal 14px 'Montserrat';
  min-height: 60px;
  padding: 3px;
  width: 100%;
`;

export const FieldWrapper = styled.div`
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  justify-content: ${props => (props.alignToRight ? 'flex-end' : 'flex-start')};
  margin: ${props => (props.margin ? props.margin : '0 0 20px 0')};
  width: ${props => (props.width ? props.width : '50%')};
`;

export const FormWrapper = styled.div`
  width: 100%;
`;

export const AddInterestedButton = styled.button`
  background: ${colors.black100};
  border: none;
  box-shadow: 0 4px 3px ${colors.black100};
  color: ${colors.white};
  font: 700 14px 'Montserrat';
  padding: 5px 10px;
  text-transform: uppercase;
  transition: all 0.2s ease-in-out;

  &:hover {
    cursor: pointer;
    background: ${colors.black200};
    transition: all 0.2s ease-in-out;
  }
`;

export const SaveButton = styled.button`
  align-self: flex-end;
  background: ${colors.primary};
  border: none;
  box-shadow: 0 5px 3px ${colors.black100};
  color: ${colors.white};
  font: 700 14px 'Montserrat';
  padding: 8px 25px;
  text-transform: uppercase;
  transition: all 0.2s ease-in-out;

  &:hover {
    cursor: pointer;
    background: ${colors.primary100};
    transition: all 0.2s ease-in-out;
  }
`;

export const DecrementInterestedButton = styled.button`
  background: none;
  border: none;

  &:hover {
    cursor: pointer;
  }
`;

export const InterestedList = styled.ul`
  padding: 0;
  margin-top: 0;
`;

export const InterestedItem = styled.li`
  color: ${colors.black300};
  font: normal 14px 'Montserrat';
  list-style: none;

  button {
    display: none;
    transition: all 0.2s ease-in-out;
  }

  &:hover {
    button {
      display: inline-block;
      transition: all 0.2s ease-in-out;
    }
  }
`;

export const FormSent = styled.p`
  color: ${colors.primary};
  font: normal 14px 'Montserrat';
  margin: 0 10px 0 0;
`;
