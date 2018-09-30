import React, { Component } from 'react';
import styled from 'styled-components';
import { DetalheProcesso, SalvaProcesso } from '../helpers/ProcessosHelper';
import Button from '../components/Button';

const Container = styled.div`
  position: fixed;
  top: 90px;
  padding: 16px;
  border: solid 1px ${(props) => props.theme.blackSecondaryColor};
  width: 910px;
  height: 470px;

  display: flex;
  flex-direction: column;

  -webkit-box-shadow: 0px 3px 8px 0px ${(props) => props.theme.shadowColor};
  -moz-box-shadow: 0px 3px 8px 0px ${(props) => props.theme.shadowColor};
  box-shadow: 0px 3px 8px 0px ${(props) => props.theme.shadowColor};
`;

const ProcessoItem = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`;

const ItemLabel = styled.span`
  font-size: 0.87em;
  font-weight: 900;
  color: ${(props) => props.theme.blackSecondaryColor};
  margin-bottom: 5px;
`;

const ItemInput = styled.input`
  font: inherit;
  width: 330px;
  padding-bottom: 8px;
  border-width: 0 0 2px;
  border-color: ${(props) => props.theme.blackTertiaryColor};

  -webkit-transition-duration: 0.4s;
  -moz-transition-duration: 0.4s;
  transition-duration: 0.4s;

  &:focus {
    border-color: ${(props) => props.theme.primaryColor};
    outline: none;
  }
`;

const DescricaoInput = styled.textarea`
  font: inherit;
  width: 755px;
  height: 85px;
  padding-bottom: 8px;
  border-width: 0 0 2px;
  border-color: ${(props) => props.theme.blackTertiaryColor};

  -webkit-transition-duration: 0.4s;
  -moz-transition-duration: 0.4s;
  transition-duration: 0.4s;

  &:focus {
    border-color: ${(props) => props.theme.primaryColor};
    outline: none;
  }
`;

const CloseButton = styled.a`
  cursor: pointer;
  color: ${(props) => props.theme.blackSecondaryColor};

  &:after {
    font-size: 2em;
    content: '\\00d7';
  }
`;

class ProcessoEditor extends Component {
  state = {
    processo: {},
    novoInteressado: '',
  };

  componentDidMount() {
    const {
      match: { params },
    } = this.props;

    if (params.processoId) this.buscaDetalheProcesso(params.processoId);
  }

  buscaDetalheProcesso = (processoId) => {
    DetalheProcesso(processoId)
      .then((resultado) => {
        this.setState({ processo: resultado });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  onChangeAssunto = (value) => {
    this.setState((prevState) => ({ processo: { ...prevState.processo, assunto: value } }));
  };

  onChangeDescricao = (value) => {
    this.setState((prevState) => ({ processo: { ...prevState.processo, descricao: value } }));
  };

  adicionaNovoInteressado = () => {
    const interessados = this.state.processo.interessados || [];
    interessados.push(this.state.novoInteressado);

    this.setState((prevState) => ({
      processo: { ...prevState.processo, interessados: interessados },
      novoInteressado: '',
    }));
  };

  salvaProcesso = () => {
    SalvaProcesso(this.state.processo)
      .then((resultado) => {
        if (resultado) {
          const location = {
            pathname: `/`,
          };

          this.props.history.push(location);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  render() {
    const { processo, novoInteressado } = this.state;

    return (
      <Container>
        <div style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-start' }}>
          <span style={{ fontSize: '1.25em', marginBottom: '25px' }}>
            {!processo.id ? 'Cadastro de processo' : 'Edição de processo'}
          </span>

          <CloseButton onClick={() => this.props.history.go(-1)} />
        </div>

        <ProcessoItem>
          <ItemLabel>Assunto</ItemLabel>
          <ItemInput value={processo ? processo.assunto : ''} onChange={(e) => this.onChangeAssunto(e.target.value)} />
        </ProcessoItem>

        <ProcessoItem>
          <ItemLabel>Interessados</ItemLabel>
          {processo.interessados &&
            processo.interessados.map((interessado, index) => {
              return <span key={index}>{interessado}</span>;
            })}
        </ProcessoItem>

        <ProcessoItem>
          <ItemLabel>Novo Interessado</ItemLabel>
          <div style={{ display: 'flex', flexDirection: 'row' }}>
            <ItemInput value={novoInteressado} onChange={(e) => this.setState({ novoInteressado: e.target.value })} />
            <Button fill onClick={this.adicionaNovoInteressado}>
              adicionar
            </Button>
          </div>
        </ProcessoItem>

        <ProcessoItem>
          <ItemLabel>Descrição</ItemLabel>
          <DescricaoInput
            value={processo ? processo.descricao : ''}
            onChange={(e) => this.onChangeDescricao(e.target.value)}
          />
        </ProcessoItem>

        <div style={{ flexDirection: 'row-reverse' }}>
          <Button primary fill onClick={this.salvaProcesso}>
            Salvar
          </Button>
        </div>
      </Container>
    );
  }
}

export default ProcessoEditor;
