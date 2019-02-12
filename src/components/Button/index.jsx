import React from 'react'
import PropTypes from 'prop-types'
import ButtonStyled from './styled'

const Button = (props) => {
  const {
    bgColor, onClick, children, closeButton, height, margin,
  } = props

  return (
    <ButtonStyled
      {...props}
      bgColor={bgColor}
      closeButton={closeButton}
      height={height}
      margin={margin}
      onClick={onClick}
    >
      {children}
    </ButtonStyled>
  )
}

Button.defaultProps = {
  bgColor: '#fff',
  closeButton: false,
  height: 'auto',
  margin: '0',
}

Button.propTypes = {
  bgColor: PropTypes.string,
  children: PropTypes.node.isRequired,
  closeButton: PropTypes.bool,
  height: PropTypes.string,
  margin: PropTypes.string,
  onClick: PropTypes.func.isRequired,
}

export default Button
