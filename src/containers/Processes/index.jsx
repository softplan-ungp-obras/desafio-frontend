import React, { PureComponent, Fragment } from 'react'
import PropTypes from 'prop-types'
import { isEmpty } from 'lodash'
import ProviderProcesses from 'core/providers/processes'
import { withSearchContext } from 'core/utils/searchContext'
import { SpinnerContent } from 'components/Spinner'
import {
  Box,
  Container,
  Input,
  Text,
} from 'components'
import { Content, Form, ImgDefault, Item } from './styled'

class Processes extends PureComponent {
  inputRef = React.createRef()

  state = {
    processes: [],
    loading: false,
  }

  componentDidMount() {
    const { search } = this.props.state
    this.inputRef.current.value = this.props.state.search
    if (!isEmpty(search)) {
      return this.loadProcesses(search)
    }

    return this.handleBack()
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

  renderProcess = item => (
    <Box key={item.id}>
      <Item>
        {item.image ? (
          <img alt={item.name} src={item.image} />
        ) : (
          <ImgDefault />
        )}
      </Item>
      <Item>
        <Text.SubTitle>Número</Text.SubTitle>
        <Text>{item.numero}</Text>
      </Item>
      <Item>
        <Text.SubTitle>Assunto</Text.SubTitle>
        <Text>{item.assunto}</Text>
      </Item>
      <Item>
        <Text.SubTitle>Interessados</Text.SubTitle>
        <Text>{item.interessados}</Text>
      </Item>
      <Item>
        <Text.SubTitle>Descrição</Text.SubTitle>
        <Text>{item.descricao}</Text>
      </Item>
    </Box>
  )

  renderProcesses = () => {
    const { processes } = this.state
    const { search } = this.props.state
    const conditional = !isEmpty(search) && !isEmpty(processes)

    return (
      <Fragment>
        {conditional ? (
          <ul>
            {processes.map(this.renderProcess)}
          </ul>
        ) : (
          <p>Nenhum processo encontrado!</p>
        )}
      </Fragment>
    )
  }

  render() {
    const { loading, processes } = this.state
    const { actions } = this.props
    const conditional = !isEmpty(processes)
    const placeHolder = 'Pesquise por uma informação do processo'

    return (
      <Container alignItems="center" hint>
        <Content>
          <Form id="search" onSubmit={event => this.onSubmit(event, actions)}>
            <Input
              onSubmit={event => this.onSubmit(event, actions)}
              placeholder={placeHolder}
              refInput={this.inputRef}
              required
              search
            />
          </Form>
          {loading && <SpinnerContent />}
          {conditional && this.renderProcesses()}
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
