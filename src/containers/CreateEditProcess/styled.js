import styled from 'styled-components'

export const Content = styled.div`
  width: 100%;

  /* input {
    width: 100%;
  } */

  @media screen and (max-width: 31.25em) {
    input {
      width: 100%;
    }
  }
`

export const ContainerAction = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  @media screen and (min-width: 23.75em) {
    align-items: flex-end;
    flex-direction: row;
  }
`

export const Label = styled.label`
  color: #696d8c;
  display: block;
  font-size: 1.2em;
  margin-bottom: 5px;
`
