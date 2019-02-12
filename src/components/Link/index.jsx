import styled from 'styled-components'
import PropTypes from 'prop-types'

const Link = styled.a`
  color: ${props => props.theme.primary};
  font-size: ${props => props.fontSize};
  font-weight: bold;
  text-decoration: underline;
  transition: all 0.2s ease;

  &:hover {
    text-decoration: none;
  }
`

Link.defaultProps = {
  fontSize: '1.6em',
}

Link.propTypes = {
  fontSize: PropTypes.string,
}

export default Link
