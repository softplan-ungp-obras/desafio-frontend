import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withSearchContext } from 'core/utils/searchContext'
import { Container, Input } from 'components'
import { H1, Form } from './styled'

class App extends Component {
  inputRef = React.createRef()

  onSubmit = (act) => {
    const { history } = this.props
    act.login(this.inputRef.current.value)
    history.push('/processos')
  }

  render() {
    const { actions } = this.props

    return (
      <Container alignItems="center" justify="center" minHeight="100vh">
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
