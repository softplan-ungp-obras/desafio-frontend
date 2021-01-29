import styled from 'styled-components';
import colors from '../../helpers/colors';
import device from '../../helpers/breakpoints';

export const SearchWrapper = styled.div`
  align-items: center;
  display: flex;
  position: relative;

  @media ${device.mobile} {
    padding: 0 20px;
  }
`;

export const Input = styled.input`
  border: solid 1px ${colors.black100};
  box-shadow: 0px 5px 3px ${colors.black100};
  color: ${colors.black300};
  font-family: 'Montserrat', sans-serif;
  font-size: 14px;
  padding: 10px 30px 10px 10px;
  width: 350px;

  ::placeholder {
    font-family: 'Montserrat', sans-serif;
    font-size: 14px;
    color: ${colors.black200};
  }

  @media ${device.mobile} {
    width: 100%;
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

  @media ${device.mobile} {
    right: 7%;
  }
`;

export const SearchForm = styled.form`
  @media ${device.mobile} {
    width: 100%;
  }
`;
