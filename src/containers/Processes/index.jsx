import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { isEmpty } from 'lodash'
import ProviderProcesses from 'core/providers/processes'
import { withSearchContext } from 'core/utils/searchContext'
import { SpinnerContent } from 'components/Spinner'
import {
  Button,
  Container,
  Input,
} from 'components'
import CreateProcess from 'containers/CreateEditProcess'
import List from './List'
import Process from './Process'
import {
  Content, Form, Grid, Group,
} from './styled'

class Processes extends PureComponent {
  inputRef = React.createRef()

  state = {
    processes: {},
    currentProcess: {},
    loading: false,
    openProcess: false,
    showModal: false,
  }

  componentDidMount() {
    const { search } = this.props.state
    this.inputRef.current.value = this.props.state.search
    if (!isEmpty(search)) {
      return this.loadProcesses(search)
    }

    return this.handleBack()
  }

  loadProcesses = async (params) => {
    this.setLoading(true)

    try {
      const { content } = await ProviderProcesses.all({ q: params })
      this.setState({ processes: content, currentProcess: {} })
    } catch (err) {
      console.log(err)
    } finally {
      this.setPanel(false)
      this.setLoading(false)
    }
  }

  loadProcess = async (id) => {
    this.setLoading(true)
    this.setPanel(true)

    try {
      const content = await ProviderProcesses.process(id)
      this.setState({ currentProcess: content })
    } catch (err) {
      console.log(err)
    } finally {
      this.setLoading(false)
    }
  }

  handleDeleteProcess = async (id) => {
    this.setLoading(true)
    const { search } = this.props.state

    try {
      await ProviderProcesses.delete(id)
    } catch (err) {
      console.log(err)
    } finally {
      this.setPanel(false)
      this.loadProcesses(search)
    }
  }

  handleProcess = (item) => {
    this.loadProcess(item)
  }

  onSubmit = (event, act) => {
    event.preventDefault()
    act.login(this.inputRef.current.value)
    this.loadProcesses(this.inputRef.current.value)
  }

  handleShowModal = () => {
    const { search } = this.props.state
    this.loadProcesses(search)
    this.setState({ showModal: !this.state.showModal })
  }

  setLoading = loading => this.setState({ loading })

  setPanel = openProcess => this.setState({ openProcess, currentProcess: {} })

  handleBack = () => {
    const { history } = this.props
    history.push('/')
  }

  renderProcesses = () => {
    const { processes, openProcess } = this.state
    const { search } = this.props.state
    const conditional = !isEmpty(search) && !isEmpty(processes)

    return (
      <div>
        {conditional ? (
          <List displayList={openProcess} onClick={this.handleProcess} processes={processes} />
        ) : (
          <p>Nenhum processo encontrado!</p>
        )}
      </div>
    )
  }

  render() {
    const { showModal } = this.state
    const {
      loading, processes, openProcess, currentProcess,
    } = this.state
    const { actions } = this.props
    const hasProcesses = !isEmpty(processes)
    const hasProcess = !isEmpty(currentProcess)
    const placeHolder = 'Pesquise por uma informação do processo'

    return (
      <Container alignItems="center" hint>
        {showModal && (
          <CreateProcess currentProcess={currentProcess} onClose={this.handleShowModal} />
        )}
        <Content>
          <Form id="search" onSubmit={event => this.onSubmit(event, actions)}>
            <Group>
              <Input
                onSubmit={event => this.onSubmit(event, actions)}
                placeholder={placeHolder}
                refInput={this.inputRef}
                required
                search
              />
            </Group>
            <Button height="40px" onClick={this.handleShowModal} type="button">NOVO</Button>
          </Form>
          <Grid hasProcess={openProcess}>
            {loading && <SpinnerContent />}
            {hasProcesses && this.renderProcesses()}
            {hasProcess && (
              <Process
                currentProcess={currentProcess}
                onClose={() => this.setPanel(false)}
                onDelete={this.handleDeleteProcess}
                onEdit={this.handleShowModal}
              />
            )}
          </Grid>
        </Content>
      </Container>
    )
  }
}

Processes.defaultProps = {
  search: undefined,
}

Processes.propTypes = {
  actions: PropTypes.oneOfType([PropTypes.func, PropTypes.object]).isRequired,
  history: PropTypes.instanceOf(Object).isRequired,
  search: PropTypes.string,
  state: PropTypes.instanceOf(Object).isRequired,
}

export default withSearchContext(Processes)
