import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { Text } from 'components'
import Head, { ImgDefault, ProcessStyled } from './styled'

class Process extends PureComponent {
  render() {
    const { currentProcess } = this.props

    return (
      <div>
        <ProcessStyled>
          <Head>
            <div>
              <ImgDefault />
            </div>
            <Head.Details>
              <div>
                <Text.SubTitle padding="0 0 10px 0">Número</Text.SubTitle>
                <Text>
                  {currentProcess.numero}
                </Text>
              </div>
              <div>
                <Text.SubTitle padding="0 0 10px 0">Data</Text.SubTitle>
                <Text>
                  {currentProcess.entrada}
                </Text>
              </div>
              <Head.Subject>
                <Text.SubTitle padding="0 0 10px 0">Assunto</Text.SubTitle>
                <Text>
                  {currentProcess.assunto}
                </Text>
              </Head.Subject>
            </Head.Details>
          </Head>
          <div>
            <Text.SubTitle padding="0 0 10px 0">Interessados</Text.SubTitle>
            <Text>
              {currentProcess.interessados}
            </Text>
          </div>
          <div>
            <Text.SubTitle padding="0 0 10px 0">Descrição</Text.SubTitle>
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
