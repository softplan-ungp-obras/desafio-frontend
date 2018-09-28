import React, { Component } from 'react'

const { Provider, Consumer } = React.createContext()

export const SearchConsumer = Consumer

export class SearchProvider extends Component {
  state = {
    search: '',
  }

  login = (search) => {
    this.setState({ search })
  }

  render() {
    return (
      <Provider value={{
        state: this.state,
        actions: {
          login: this.login,
        },
      }}
      >
        {this.props.children}
      </Provider>
    )
  }
}
