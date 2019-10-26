import styled from 'styled-components';
import { Input } from '~/components/elements';
import theme from '~/styles/theme';

export const Box = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
  max-width: 450px;
  margin-left: auto;
  margin-right: auto;
  form {
    display: block;
    width: 100%;
  }
  p,
  h1 {
    text-align: center;
  }
`;

export const InputStyle = styled(Input)`
  margin: 35px 0 65px 0;
`;

export const CustomLink = styled.button`
  color: ${theme.primary.main};
  font-weight: 900;
  border: none;
  background: transparent;
  text-decoration: underline;
  font-size: 16px;
  &:hover {
    color: ${theme.primary.hover};
  }
`;
