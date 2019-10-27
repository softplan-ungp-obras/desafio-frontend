import styled from 'styled-components';
import colors from '../../helpers/colors';
import device from '../../helpers/breakpoints';

export const NewProcessMessage = styled.p`
  color: ${colors.black200};
  font-size: 14px;
  margin-top: 30px;

  @media ${device.mobile} {
    width: 80%;
    text-align: center;
  }
`;

export const NewProcessLinkModal = styled.button`
  background: none;
  border: none;
  color: ${colors.primary};
  font-weight: 700;
  text-decoration: underline;

  &:hover {
    cursor: pointer;
  }
`;
