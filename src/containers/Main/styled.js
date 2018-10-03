import styled from 'styled-components'

export const H1 = styled.h1`
  color: ${({ theme }) => theme.primary};
  font-size: 2.0em;
  font-weight: normal;
`

export const Form = styled.form`
  padding: 10px;
  width: 100%;

  @media screen and (min-width: 25em) {
    width: 400px;
  }
`
