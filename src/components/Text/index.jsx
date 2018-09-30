import styled from 'styled-components'

const Text = styled.p`
  color: ${({ theme }) => theme.black};
  font-size: 1.6em;
  font-weight: normal;
`

Text.Title = styled.p`
  color: ${({ theme }) => theme.black};
  font-size: 2.0em;
  font-weight: normal;
`

Text.SubTitle = styled.p`
  color: ${({ theme }) => theme.mediumBlack};
  font-size: 1.4em;
  font-weight: bold;
`

Text.Headline = styled.p`
  color: ${({ theme }) => theme.primary};
  font-size: 2.4em;
  font-weight: normal;
`

export default Text
