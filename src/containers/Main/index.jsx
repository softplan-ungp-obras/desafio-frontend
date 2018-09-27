import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router-dom'
import ProviderProcesses from 'core/providers/processes'
import logo from 'core/assets/images/logo.svg'
import './App.css'
import AppStyled from './styled'

class App extends Component {
  state = {
    processes: [],
  }

  componentDidMount() {
    this.loadProcesses()
  }

  loadProcesses = async () => {
    try {
      const { content } = await ProviderProcesses.all()
      this.setState({ processes: content })
    } catch (err) {
      console.log(err)
    } finally {
      // this.setState({ loading: false })
    }
  }

  handleButton = () => {
    const { history } = this.props
    history.push('/processos')
  }

  render() {
    const { processes } = this.state

    return (
      <AppStyled className="App">
        <header className="App-header">
          <img alt="logo" className="App-logo" src={logo} />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <button onClick={this.handleButton} type="button">
          Go
        </button>
        <ul>
          {processes.map(item => (
            <li key={item.id}>{item.assunto}</li>
          ))}
        </ul>
      </AppStyled>
    )
  }
}

App.propTypes = {
  history: PropTypes.object.isRequired,
}

export default withRouter(App)
