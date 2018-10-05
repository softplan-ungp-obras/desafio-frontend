import styled from 'styled-components'
import PropTypes from 'prop-types'

const Text = styled.p`
  color: ${({ theme }) => theme.black};
  padding: ${props => props.padding};
  font-size: ${props => props.fontSize};
  font-weight: normal;
`

Text.defaultProps = {
  fontSize: '1.6em',
}

Text.propTypes = {
  fontSize: PropTypes.string,
}

Text.Title = styled.p`
  color: ${({ theme }) => theme.black};
  font-size: 2.0em;
  font-weight: normal;
`

Text.SubTitle = styled.p`
  color: ${({ theme }) => theme.mediumBlack};
  padding: ${props => props.padding};
  font-size: 1.4em;
  font-weight: bold;
`

Text.Headline = styled.p`
  color: ${({ theme }) => theme.primary};
  padding: ${props => props.padding};
  font-size: 2.4em;
  font-weight: normal;
`

export default Text
