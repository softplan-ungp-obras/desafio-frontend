import React from 'react'
import PropTypes from 'prop-types'
import ButtonStyled from './styled'

const Button = (props) => {
  const {
    onClick, children, closeButton, margin,
  } = props

  return (
    <ButtonStyled closeButton={closeButton} margin={margin} onClick={onClick}>
      {children}
    </ButtonStyled>
  )
}

Button.defaultProps = {
  closeButton: false,
  margin: '0',
}

Button.propTypes = {
  children: PropTypes.string.isRequired,
  closeButton: PropTypes.bool,
  margin: PropTypes.string,
  onClick: PropTypes.func.isRequired,
}

export default Button
