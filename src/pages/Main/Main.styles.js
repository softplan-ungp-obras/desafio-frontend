import styled from 'styled-components';
import colors from '../../helpers/colors';

export const MainPageWrapper = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  width: 100%;
`;

export const MainPageTitle = styled.h2`
  color: ${colors.primary};
  font-size: 24px;
  font-weight: 400;
  flex-grow: 1;
  margin-top: 15%;
`;
