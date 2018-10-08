import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withSearchContext } from 'core/utils/searchContext'
import {
  Container, Input, Link, Text,
} from 'components'
import CreateProcess from 'containers/CreateEditProcess'
import { H1, Form } from './styled'

class App extends Component {
  inputRef = React.createRef()

  state = {
    showModal: false,
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

    const foo = {
      id: 'dhuad7y-jjc73m-ko222mi7-m76fF7',
      assunto: 'teste',
      interessados: ['everton', 'gabriel', 'cherly'],
      descricao: 'descriptions teste...;)',
    }

    return (
      <Container alignItems="center" hint justify="center" minHeight="100vh">
        {showModal && <CreateProcess currentProcess={foo} onClose={this.handleCloseButton} />}

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
        <Text fontSize="1.2em">
          Você pode criar um novo processo&nbsp;
          <Link fontSize="1.1em" href="#" onClick={this.handleCloseButton}>clicando aqui</Link>.
        </Text>
      </Container>
    )
  }
}

App.propTypes = {
  actions: PropTypes.oneOfType([PropTypes.func, PropTypes.object]).isRequired,
  history: PropTypes.instanceOf(Object).isRequired,
}

export default withSearchContext(App)
