import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'

const getStyles = ({
  direction, justify, alignItems, padding, width, minHeight,
}) => css`
  width: ${width};
  min-height: ${minHeight};
  padding: ${padding};
  flex-direction: ${direction};
  justify-content: ${justify};
  align-items: ${alignItems};
  position: relative;
`

const ContainerStyled = styled.div`
  display: flex;
  ${getStyles}
`

ContainerStyled.defaultProps = {
  alignItems: 'stretch',
  direction: 'column',
  justify: 'flex-start',
  minHeight: '1px',
  overflow: 'visible',
  padding: '0',
  width: 'auto',
}

ContainerStyled.propTypes = {
  alignItems: PropTypes.string,
  direction: PropTypes.oneOf(['column', 'row']),
  justify: PropTypes.string,
  minHeight: PropTypes.string,
  overflow: PropTypes.oneOf(['auto', 'hidden', 'visible', 'scroll']),
  padding: PropTypes.string,
  width: PropTypes.string,
}

export default ContainerStyled
