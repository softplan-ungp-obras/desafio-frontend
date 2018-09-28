import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withSearchContext } from 'core/utils/searchContext'
import Container from 'components/Container'

class App extends Component {
  inputRef = React.createRef()

  handleButton = (act) => {
    const { history } = this.props
    act.login(this.inputRef.current.value)
    history.push('/processos')
  }

  render() {
    const { actions } = this.props

    return (
      <Container alignItems="center" justify="center" minHeight="100vh">
        <h1>Busca de processos</h1>
        <input ref={this.inputRef} type="text" />
        <button onClick={() => this.handleButton(actions)} type="button">
          Go
        </button>
        <p>Você pode criar um novo processo clicando aqui</p>
      </Container>
    )
  }
}

App.propTypes = {
  actions: PropTypes.func.isRequired,
  history: PropTypes.instanceOf(Object).isRequired,
}

export default withSearchContext(App)
