import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withSearchContext } from 'core/utils/searchContext'
import logo from 'core/assets/images/logo.svg'
import './App.css'
import AppStyled from './styled'

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
      <AppStyled className="App">
        <header className="App-header">
          <img alt="logo" className="App-logo" src={logo} />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <input ref={this.inputRef} type="text" />
        <button onClick={() => this.handleButton(actions)} type="button">
          Go
        </button>
      </AppStyled>
    )
  }
}

App.propTypes = {
  history: PropTypes.instanceOf(Object).isRequired,
}

export default withSearchContext(App)
