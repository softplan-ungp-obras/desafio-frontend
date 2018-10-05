import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withSearchContext } from 'core/utils/searchContext'
import { Container, Input, Modal } from 'components'
import { H1, Form } from './styled'

class App extends Component {
  inputRef = React.createRef()

  state = {
    showModal: true,
  }

  onSubmit = (act) => {
    const { history } = this.props
    act.login(this.inputRef.current.value)
    history.push('/processos')
  }

  handleCloseButton = () => this.setState({ showModal: !this.state.showModal })

  render() {
    const { showModal } = this.state
    const { actions } = this.props

    return (
      <Container alignItems="center" hint justify="center" minHeight="100vh">
        {showModal && (
          <Modal
            onClose={this.handleCloseButton}
            onSave={() => console.log('save')}
            submitText="SALVAR"
            title="Cadastro de processo"
          >
            Simple Modal
          </Modal>
        )}

        <H1>Busca de processos</H1>
        <Form id="search" onSubmit={() => this.onSubmit(actions)}>
          <Input
            onSubmit={() => this.onSubmit(actions)}
            placeholder="Pesquise por uma informação do processo"
            refInput={this.inputRef}
            required
            search
          />
        </Form>
        <p>Você pode criar um novo processo clicando aqui</p>
      </Container>
    )
  }
}

App.propTypes = {
  actions: PropTypes.oneOfType([PropTypes.func, PropTypes.object]).isRequired,
  history: PropTypes.instanceOf(Object).isRequired,
}

export default withSearchContext(App)
