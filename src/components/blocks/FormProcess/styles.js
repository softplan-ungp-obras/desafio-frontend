import styled from 'styled-components';

export const Form = styled.form`
  width: 100%;
`;

export const Bottom = styled.form`
  margin-top: 15px;
  text-align: right;
`;

export const LimitSize = styled.div`
  margin: 25px 0;

  label {
    display: block;
  }
  input {
    max-width: 300px;
  }
`;
