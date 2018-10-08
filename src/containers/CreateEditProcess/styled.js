import styled from 'styled-components'

export const Content = styled.div`
  width: 100%;

  @media screen and (min-width: 60em) {
    width: ${({ theme }) => theme.wrapperWidth};
  }
`

export const ContainerAction = styled.div`
  display: flex;
  align-items: flex-end;
`

export const Label = styled.label`
  color: #696d8c;
  display: block;
  font-size: 1.2em;
  margin-bottom: 5px;
`
