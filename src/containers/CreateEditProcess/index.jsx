import React, { PureComponent, Fragment } from 'react'
import PropTypes from 'prop-types'
import { isEmpty } from 'lodash'
import ProviderProcesses from 'core/providers/processes'
import { SpinnerContent } from 'components/Spinner'
import {
  Button, Input, Modal, Text,
} from 'components'
import { Content, ContainerAction, Label } from './styled'

class CreateProcessModal extends PureComponent {
  subjectRef = React.createRef()

  interestedRef = React.createRef()

  descriptionRef = React.createRef()

  state = {
    loading: false,
    validate: false,
    newProcess: {
      assunto: '',
      descricao: '',
      interessados: [],
    },
  }

  componentDidMount() {
    const { currentProcess } = this.props
    const { newProcess } = this.state

    if (currentProcess) {
      const { id, interessados } = currentProcess
      this.subjectRef.current.value = currentProcess.assunto
      this.descriptionRef.current.value = currentProcess.descricao

      this.setState({ newProcess: { ...newProcess, id, interessados } })
      this.handleChange()
    }
  }

  componentDidUpdate(prevProps, prevState) {
    // console.log('prevState: ', prevState)
    // console.log('nextState: ', this.state)
    // Typical usage (don't forget to compare props):
    // if (this.props.userID !== prevProps.userID) {
    //   this.fetchData(this.props.userID);
    // }
  }

  createProcess = async () => {
    this.setLoading(true)
    // const { newProcess } = this.state
    // console.log(newProcess)
    const { interessados } = this.state.newProcess
    const assunto = this.subjectRef.current.value
    const descricao = this.descriptionRef.current.value

    console.log(this.state.newProcess)

    const data = { assunto, interessados, descricao }

    try {
      await ProviderProcesses.create(data)
    } catch (err) {
      console.log(err)
    } finally {
      this.clearForm()
      this.setLoading(false)
    }
  }

  clearForm = () => {
    this.subjectRef.current.value = ''
    this.descriptionRef.current.value = ''
    this.interestedRef.current.value = ''
    this.setState({ validate: false, newProcess: { assunto: '', interessados: [], descricao: '' } })
  }

  handleChange = () => {
    const assunto = this.subjectRef.current.value
    const descricao = this.descriptionRef.current.value

    if (assunto && descricao) {
      this.setState({ validate: true })
    }
  }

  handleSubmit = () => {
    const { interessados } = this.state.newProcess
    const assunto = this.subjectRef.current.value
    const descricao = this.descriptionRef.current.value
    console.log(assunto);

    this.setState({ newProcess: { assunto, interessados, descricao } })
    // this.createProcess()
  }

  handleAddInterested = (event) => {
    event.preventDefault()
    const { newProcess } = this.state
    const newInterest = this.interestedRef.current.value

    if (newInterest) {
      const interested = [
        ...newProcess.interessados,
        this.interestedRef.current.value,
      ]
      this.interestedRef.current.value = ''

      this.setState({ newProcess: { ...newProcess, interessados: interested } })
    }
  }

  setLoading = loading => this.setState({ loading })

  render() {
    const { loading, newProcess, validate } = this.state
    const { interessados } = newProcess
    const { onClose } = this.props
    const hasInterested = !isEmpty(interessados)

    // console.log(this.state.newProcess)

    return (
      <Fragment>
        <Modal
          onClose={onClose}
          onSave={this.handleSubmit}
          submitText="SALVAR"
          title="Cadastro de processo"
          validate={validate}
        >
          <form>
            <Content>
              {loading && <SpinnerContent />}
              <Input
                clean
                label="Assunto"
                onChange={this.handleChange}
                padding="0 10px 10px 0"
                placeholder="assunto"
                refInput={this.subjectRef}
                required
                width="320px"
              />

              <Label>Interessados</Label>
              {hasInterested && (
                interessados.map((item, index) => (
                  <Text key={`${item}-${index}`} fontSize="1.4em">{item }</Text>
                ))
              )}

              <ContainerAction>
                <Input
                  clean
                  label="Novo interessado"
                  onSubmit={this.handleAddInterested}
                  padding="0 10px 10px 0"
                  placeholder="novo interessado"
                  refInput={this.interestedRef}
                  width="320px"
                />

                <Button
                  grayButton
                  margin="0 0 25px 10px"
                  onClick={event => this.handleAddInterested(event)}
                >
                  ADICIONAR
                </Button>
              </ContainerAction>

              <Input
                clean
                label="Descrição"
                onChange={this.handleChange}
                padding="0 10px 10px 0"
                refInput={this.descriptionRef}
                required
                type="textarea"
              />

            </Content>
          </form>
        </Modal>
      </Fragment>
    )
  }
}

CreateProcessModal.defaultProps = {
  currentProcess: undefined,
}

CreateProcessModal.propTypes = {
  currentProcess: PropTypes.instanceOf(Object),
  onClose: PropTypes.func.isRequired,
}

export default CreateProcessModal
