import styled from 'styled-components';
import colors from '../../helpers/colors';

export const SearchWrapper = styled.div`
  align-items: center;
  display: flex;
  position: relative;
`;

export const Input = styled.input`
  border: solid 1px ${colors.black100};
  box-shadow: 0px 5px 3px ${colors.black100};
  color: ${colors.black200};
  font-family: 'Montserrat', sans-serif;
  font-size: 14px;
  padding: 10px 30px 10px 10px;
  width: 350px;

  ::placeholder {
    font-family: 'Montserrat', sans-serif;
    font-size: 14px;
    color: ${colors.black200};
  }
`;

export const InputIcon = styled.button`
  background: none;
  border: none;
  position: absolute;
  right: 5px;

  &:hover {
    cursor: pointer;
  }
`;
