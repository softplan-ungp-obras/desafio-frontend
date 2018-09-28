import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import ProviderProcesses from 'core/providers/processes'
import { withSearchContext } from 'core/utils/searchContext'

class Processes extends PureComponent {
  state = {
    processes: [],
  }

  componentDidMount() {
    const { search } = this.props.state
    this.loadProcesses(search)
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

  handleBack = () => {
    const { history } = this.props
    history.push('/')
  }

  render() {
    const { processes } = this.state
    const { search } = this.props.state

    return (
      <div>
        <h1>Processes</h1>
        <h2>{search}</h2>
        <ul>
          {processes.map(item => (
            <li key={item.id}>{item.assunto}</li>
          ))}
        </ul>
        <button onClick={this.handleBack} type="button">
          Back
        </button>
      </div>
    )
  }
}

Processes.propTypes = {
  history: PropTypes.instanceOf(Object).isRequired,
}

export default withSearchContext(Processes)
