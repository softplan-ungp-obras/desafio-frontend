import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import ButtonStyled from './styled'

class Button extends PureComponent {
  render() {
    const { onClick, children, close, margin } = this.props

    return (
      <ButtonStyled close={close} margin={margin} onClick={onClick}>
        {children}
      </ButtonStyled>
    )
  }
}

Button.defaultProps = {
  close: false,
  margin: '0',
}

Button.propTypes = {
  children: PropTypes.string.isRequired,
  close: PropTypes.bool,
  margin: PropTypes.string,
  onClick: PropTypes.func.isRequired,
}

export default Button
