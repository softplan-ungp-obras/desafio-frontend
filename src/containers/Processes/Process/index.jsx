import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { Button, Text } from 'components'
import { ReactComponent as CloseIcon } from 'core/assets/svg/delete.svg'
import Head, { Actions, ImgDefault, ProcessStyled } from './styled'

class Process extends PureComponent {
  render() {
    const {
      currentProcess, onClose, onDelete, onEdit,
    } = this.props

    return (
      <div>
        <ProcessStyled>
          <Button closeButton onClick={onClose} type="button">
            <CloseIcon />
          </Button>
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
          <Actions>
            <Button margin="0 15px" onClick={() => onDelete(currentProcess.id)} type="button">REMOVER</Button>
            <Button onClick={onEdit} type="button">EDITAR</Button>
          </Actions>
        </ProcessStyled>
      </div>
    )
  }
}

Process.propTypes = {
  currentProcess: PropTypes.instanceOf(Object).isRequired,
  onClose: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
  onEdit: PropTypes.func.isRequired,
}

export default Process
