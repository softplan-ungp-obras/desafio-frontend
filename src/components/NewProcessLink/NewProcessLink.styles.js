import styled from 'styled-components';
import colors from '../../helpers/colors';

export const NewProcessMessage = styled.p`
  color: ${colors.black200};
  font-size: 14px;
  margin-top: 30px;
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
