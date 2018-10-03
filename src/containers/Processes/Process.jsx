import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { Text } from 'components'
import { ImgDefault, ProcessStyled } from './styled'

class Process extends PureComponent {
  render() {
    const { currentProcess } = this.props

    return (
      <div>

      <ProcessStyled>
        <ImgDefault />
        <div>
          <Text>
            {currentProcess.numero}
          </Text>
        </div>
        <div>
          <Text>
            {currentProcess.entrada}
          </Text>
        </div>
        <div>
          <Text>
            {currentProcess.assunto}
          </Text>
        </div>
        <div>
          <Text>
            {currentProcess.interessados}
          </Text>
        </div>
        <div>
          <Text>
            {currentProcess.descricao}
          </Text>
        </div>
      </ProcessStyled>
      </div>
    )
  }
}

Process.propTypes = {
  currentProcess: PropTypes.instanceOf(Object).isRequired,
}

export default Process
