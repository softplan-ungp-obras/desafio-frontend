import React, { PureComponent, Fragment } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import ProviderProcesses from 'core/providers/processes'
import { SpinnerContent } from 'components/Spinner'
import { Box, Text } from 'components'
import { Item, ImgDefault } from './styled'

class Process extends PureComponent {
  state = {
    loading: false,
    process: {},
  }

  componentDidMount() {
    const { id } = this.props.match.params

    if (id) {
      this.loadProcesses(id)
    }
  }

  loadProcesses = async (id) => {
    this.setLoading(true)

    try {
      const content = await ProviderProcesses.process(id)
      this.setState({ process: content })
    } catch (err) {
      console.log(err)
    } finally {
      this.setLoading(false)
    }
  }

  setLoading = loading => this.setState({ loading })

  renderProcess = item => (
    <Link key={item.id} to={`/processo/${item.id}`}>
      <Box>
        <ImgDefault>
          {item.image && <img alt={item.name} src={item.image} />}
        </ImgDefault>
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
    </Link>
  )

  render() {
    const { loading, process } = this.state
    console.log(process)
    return (
      <Fragment>
        <h1>Processo</h1>
        {loading && <SpinnerContent />}
        {/* {processes.map(this.renderProcess)} */}
      </Fragment>
    )
  }
}

Process.propTypes = {
  match: PropTypes.instanceOf(Object).isRequired,
}

export default Process
