import React, { PureComponent, Fragment } from 'react'
import PropTypes from 'prop-types'
import { isEmpty } from 'lodash'
import ProviderProcesses from 'core/providers/processes'
import { withSearchContext } from 'core/utils/searchContext'
import { Container, Input } from 'components'
import { Content, Form } from './styled'

class Processes extends PureComponent {
  inputRef = React.createRef()

  state = {
    processes: [],
    loading: false,
  }

  componentDidMount() {
    const { search } = this.props.state
    this.loadProcesses(search)
  }

  onSubmit = (event, act) => {
    event.preventDefault()
    act.login(this.inputRef.current.value)
    this.loadProcesses(this.inputRef.current.value)
  }

  loadProcesses = async (params) => {
    this.setLoading(true)

    try {
      const { content } = await ProviderProcesses.all({ q: params })
      this.setState({ processes: content })
    } catch (err) {
      console.log(err)
    } finally {
      this.setLoading(false)
    }
  }

  setLoading = loading => this.setState({ loading })

  handleBack = () => {
    const { history } = this.props
    history.push('/')
  }

  renderProcesses = () => {
    const { processes } = this.state
    const { search } = this.props.state
    const conditional = !isEmpty(search) && !isEmpty(processes)

    return (
      <Fragment>
        {conditional ? (
          <ul>
            {processes.map(item => (
              <li key={item.id}>{item.assunto}</li>
            ))}
          </ul>
        ) : (
          <p>Nenhum processo encontrado!</p>
        )}
      </Fragment>
    )
  }

  render() {
    const { loading } = this.state
    const { search } = this.props.state
    const { actions } = this.props

    return (
      <Container alignItems="center">
        <Content>
          <Form id="search" onSubmit={event => this.onSubmit(event, actions)}>
            <Input
              onSubmit={event => this.onSubmit(event, actions)}
              placeholder="Pesquise por uma informação do processo"
              refInput={this.inputRef}
              required
              search
            />
          </Form>
          <h2>{search}</h2>
          {loading && <p>LOADING...</p>}
          {!loading && this.renderProcesses()}
          <button onClick={this.handleBack} type="button">
            Back
          </button>
        </Content>
      </Container>
    )
  }
}

Processes.defaultProps = {
  search: null,
}

Processes.propTypes = {
  actions: PropTypes.oneOfType([PropTypes.func, PropTypes.object]).isRequired,
  history: PropTypes.instanceOf(Object).isRequired,
  search: PropTypes.string,
  state: PropTypes.instanceOf(Object).isRequired,
}

export default withSearchContext(Processes)
