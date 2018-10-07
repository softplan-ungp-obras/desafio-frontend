import styled from 'styled-components'

export const Content = styled.div`
  width: 100%;

  @media screen and (min-width: 60em) {
    width: ${({ theme }) => theme.wrapperWidth};
  }
`
