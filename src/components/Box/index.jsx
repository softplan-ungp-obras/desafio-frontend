import React from 'react'
import PropTypes from 'prop-types'
import BoxStyled from './styled'

const Box = (props) => {
  const { children } = props

  return (
    <BoxStyled>
      {children}
    </BoxStyled>
  )
}

Box.defaultProps = {
  children: null,
}

Box.propTypes = {
  children: PropTypes.node,
}

export default Box
