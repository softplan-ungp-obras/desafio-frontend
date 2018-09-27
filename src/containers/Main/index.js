import React, { Component } from 'react'
import logo from 'core/assets/images/logo.svg'
import './App.css'
import AppStyled from './styled'

class App extends Component {
  state = {
    repos: [],
  }

  componentDidMount() {
    fetch('https://api.github.com/users/udacity/repos')
      .then(results => results.json())
      .then(data => this.setState({ repos: data }))
  }

  render() {
    const { repos } = this.state

    return (
      <AppStyled className="App">
        <header className="App-header">
          <img alt="logo" className="App-logo" src={logo} />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <ul>
          {repos.map(item => (
            <li key={item.id}>{item.name}</li>
          ))}
        </ul>
      </AppStyled>
    )
  }
}

export default App
