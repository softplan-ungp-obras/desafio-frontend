import styled from 'styled-components';
import theme from '~/styles/theme';

export const Box = styled.div`
  display: grid;
  grid-template-columns: 0.8fr 2.8fr 4fr;
  grid-template-rows: 1fr;
  padding: 50px 0 35px;
  column-gap: 20px;

  @media (max-width: ${theme.medias.lg}) {
    grid-template-columns: 3fr 1fr;
    text-align: center;
    > div:first-child {
      margin-bottom: 15px;
      grid-column: span 2;
    }
  }
`;
