import styled from 'styled-components'

const App = styled.div`
  color: ${({ theme }) => theme.primary};
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export default App
