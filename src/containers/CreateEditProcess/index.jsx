import React, { PureComponent, Fragment } from 'react'
import PropTypes from 'prop-types'
import { isEmpty } from 'lodash'
import {
  Input, Link, Modal, Text,
} from 'components'
import { Content } from './styled'

class CreateProcessModal extends PureComponent {
  subjectRef = React.createRef()

  interestedRef = React.createRef()

  descriptionRef = React.createRef()

  state = {
    newProcess: {
      assunto: '',
      descricao: '',
      interessados: [],
    },
  }

  componentDidMount() {
    const { foo } = this.props
    const { newProcess } = this.state

    if (foo) {
      const interested = foo.interessados
      this.subjectRef.current.value = foo.assunto
      this.descriptionRef.current.value = foo.descricao

      this.setState({ newProcess: { ...newProcess, interessados: interested } })
    }
  }

  clearForm = () => {
    this.subjectRef.current.value = ''
    this.descriptionRef.current.value = ''
    this.interestedRef.current.value = ''
  }

  handleSubmit = () => {
    const { interessados } = this.state.newProcess
    const assunto = this.subjectRef.current.value
    const descricao = this.descriptionRef.current.value

    this.setState({ newProcess: { assunto, interessados, descricao } })
    this.clearForm()
  }

  handleAddInterested = () => {
    const { newProcess } = this.state
    const interested = [
      ...newProcess.interessados,
      this.interestedRef.current.value,
    ]
    this.interestedRef.current.value = ''

    this.setState({ newProcess: { ...newProcess, interessados: interested } })
  }

  render() {
    const { interessados } = this.state.newProcess
    const { onClose } = this.props
    const hasInterested = !isEmpty(interessados)
    console.log(this.state.newProcess)

    return (
      <Fragment>
        <Modal
          onClose={onClose}
          onSave={this.handleSubmit}
          submitText="SALVAR"
          title="Cadastro de processo"
        >
          <Content>
            <Input
              label="Assunto"
              placeholder="assunto"
              refInput={this.subjectRef}
              required
            />

            {hasInterested && (
              interessados.map((item, index) => <Text key={`${item}-${index}`}>{item }</Text>)
            )}

            <Input
              label="Novo interessado"
              onSubmit={this.handleAddInterested}
              placeholder="novo interessado"
              refInput={this.interestedRef}
              required
            />

            <Link href="#" onClick={this.handleAddInterested}>
              adicionar
            </Link>

            <Input
              label="Descrição"
              refInput={this.descriptionRef}
              required
              type="textarea"
            />

          </Content>
        </Modal>
      </Fragment>
    )
  }
}

CreateProcessModal.propTypes = {
  onClose: PropTypes.func.isRequired,
}

export default CreateProcessModal
