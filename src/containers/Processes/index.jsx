import React, { PureComponent } from 'react'
import { withRouter } from 'react-router-dom'

class Processes extends PureComponent {
  handleBack = () => {
    this.props.history.push('/')
  }

  render() {
    return (
      <div>
        <h1>Processes</h1>
        <button onClick={this.handleBack} type="button">
          BACK
        </button>
      </div>
    )
  }
}

export default withRouter(Processes)
