import React, { PureComponent, Fragment } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { Box, Text } from 'components'
import { Item, ImgDefault } from './styled'

class List extends PureComponent {
  openProcess = (process) => {
    console.log(process)
    console.log(this.props)
  }

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
    const { processes } = this.props
    return (
      <Fragment>
        {processes.map(this.renderProcess)}
      </Fragment>
    )
  }
}

List.propTypes = {
  processes: PropTypes.oneOfType([PropTypes.object, PropTypes.array]).isRequired,
}

export default List
