import styled from 'styled-components'

const App = styled.div`
  color: ${({ theme }) => theme.primary};

  ul > li {
    font-size: 1.4em;
    list-style: none;
  }
`

export default App
