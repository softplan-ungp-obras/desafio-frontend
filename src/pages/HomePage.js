import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import BuscaInput from '../components/BuscaInput';

const Title = styled.span`
  color: ${(props) => props.theme.primaryColor};
  font-size: ${(props) => props.theme.headlineFontSize};
  margin: ${(props) => props.theme.headlineFontSize};
`;

const SubTitle = styled.span`
  margin-top: 4em;
  font-size: ${(props) => props.theme.subtitleFontSize};
`;

class HomePage extends Component {
  buscaProcessos = (query) => {
    const location = {
      pathname: '/busca',
      search: `?query=${query}`,
    };

    this.props.history.push(location);
  };

  render() {
    return (
      <div style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Title>Busca de processos</Title>

        <BuscaInput onSubmit={this.buscaProcessos.bind(this)} />

        <SubTitle>
          Você pode criar um novo processo{' '}
          <Link to="/editor" style={{ fontWeight: 900, color: '#005b95' }}>
            clicando aqui
          </Link>
        </SubTitle>
      </div>
    );
  }
}

export default HomePage;
