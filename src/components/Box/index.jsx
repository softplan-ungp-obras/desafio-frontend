import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import BoxStyled from './styled'

class Box extends PureComponent {
  render() {
    const { children } = this.props

    return (
      <BoxStyled>
        {children}
      </BoxStyled>
    )
  }
}

Box.defaultProps = {
  children: null,
}

Box.propTypes = {
  children: PropTypes.instanceOf(Object),
}

export default Box
