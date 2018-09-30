import React, { Component } from 'react';

import { BuscaProcesso, DetalheProcesso, ApagaProcesso } from '../helpers/ProcessosHelper';
import BuscaInput from '../components/BuscaInput';
import Button from '../components/Button';
import ProcessoInfo from '../components/ProcessoInfo';
import ProcessoDetalhe from '../components/ProcessoDetalhe';

let urlParams;

class ListaProcessos extends Component {
  state = {
    processos: [],
    processoDetalhe: null,
    query: '',
  };

  componentDidMount() {
    const search = this.props.location.search;
    urlParams = new URLSearchParams(search);

    this.setState({ query: urlParams.get('query') }, () => this.buscaProcessos());

    if (urlParams.get('processoDetalhe')) {
      this.buscaDetalheProcesso(urlParams.get('processoDetalhe'));
    }
  }

  buscaProcessos = () => {
    BuscaProcesso(this.state.query)
      .then((resultado) => {
        this.setState({ processos: resultado });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  buscaDetalheProcesso = (processoId) => {
    const location = {
      pathname: '/busca',
      search: `?query=${urlParams.get('query')}&processoDetalhe=${processoId}`,
    };
    this.props.history.push(location);

    DetalheProcesso(processoId)
      .then((resultado) => {
        this.setState({ processoDetalhe: resultado });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  onChangeQuery = (query) => {
    const location = {
      pathname: '/busca',
      search: `?query=${query}`,
    };

    this.props.history.push(location);
    this.setState({ query: query }, () => this.buscaProcessos());
  };

  editProcesso = (processoId) => {
    const location = {
      pathname: `/editor/${processoId || ''}`,
    };

    this.props.history.push(location);
  };

  onCloseProcessoDetalhe = () => {
    const location = {
      pathname: '/busca',
      search: `?query=${urlParams.get('query')}`,
    };
    this.props.history.push(location);
    this.setState({ processoDetalhe: null });
  };

  apagarProcesso = (processoId) => {
    ApagaProcesso(processoId)
      .then((response) => {
        if (response) {
          this.setState({ processoDetalhe: null }, () => this.buscaProcessos());
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  render() {
    return (
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            flex: 1,
            justifyContent: 'space-around',
            padding: '30px 90px',
          }}
        >
          <span style={{ width: '100px' }}>Busca de processos</span>
          <BuscaInput value={this.state.query} onSubmit={this.onChangeQuery.bind(this)} />
          <Button onClick={() => this.editProcesso()}>Novo</Button>
        </div>

        <div style={{ display: 'flex', flexDirection: 'row' }}>
          <div style={{ marginRight: '20px' }}>
            {this.state.processos.map((processo) => {
              return (
                <ProcessoInfo
                  processo={processo}
                  key={processo.id}
                  compacto={this.state.processoDetalhe ? true : false}
                  ativo={this.state.processoDetalhe && this.state.processoDetalhe.id === processo.id ? true : false}
                  onSelect={this.buscaDetalheProcesso.bind(this)}
                />
              );
            })}
          </div>
          <div>
            {this.state.processoDetalhe ? (
              <ProcessoDetalhe
                onClose={this.onCloseProcessoDetalhe}
                processo={this.state.processoDetalhe}
                editProcesso={this.editProcesso}
                apagarProcesso={this.apagarProcesso}
              />
            ) : null}
          </div>
        </div>
      </div>
    );
  }
}

export default ListaProcessos;
