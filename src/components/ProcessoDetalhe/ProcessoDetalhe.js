import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Button from '../Button';

function ProcessoDetalhe({ processo, editProcesso, apagarProcesso, onClose }) {
  const Container = styled.aside`
    justify-content: stretch;

    min-height: 45em;
    width: 46em;
    padding: 1em;
    border: solid 1px ${(props) => props.theme.blackSecondaryColor};

    -webkit-box-shadow: 0px 3px 8px 0px ${(props) => props.theme.shadowColor};
    -moz-box-shadow: 0px 3px 8px 0px ${(props) => props.theme.shadowColor};
    box-shadow: 0px 3px 8px 0px ${(props) => props.theme.shadowColor};
  `;

  const Header = styled.div`
    flex-flow: wrap;
    flex-direction: row;
    margin-bottom: 1em;
  `;

  const Content = styled.div`
    flex: 1;
  `;

  const Footer = styled.div`
    flex-direction: row;
    justify-content: flex-end;
    margin-top: 1em;
  `;

  const ProcessoImagem = styled.div`
    height: 7.5em;
    width: 7.5em;
    margin-right: 1em;
    background-color: ${(props) => props.theme.blackTertiaryColor};
  `;

  const ProcessoItem = styled.div`
    display: flex;
    flex-direction: column;
  `;

  const ItemLabel = styled.span`
    font-size: ${(props) => props.theme.subtitleFontSize};
    font-weight: 900;
    color: ${(props) => props.theme.blackSecondaryColor};
    margin-bottom: 5px;
  `;

  const ItemValue = styled.span`
    font-size: ${(props) => props.theme.headlineFontSize};
  `;

  const CloseButton = styled.a`
    cursor: pointer;
    color: ${(props) => props.theme.blackSecondaryColor};

    &:after {
      font-size: 2em;
      display: inline-block;
      content: '\\00d7';
    }
  `;

  return (
    <Container>
      <Header>
        <ProcessoImagem />
        <div
          style={{
            flex: 1,
            justifyContent: 'space-between',
          }}
        >
          <div style={{ flexDirection: 'row' }}>
            <ProcessoItem style={{ flex: 1 }}>
              <ItemLabel>Processo</ItemLabel>
              <ItemValue>{processo.numero}</ItemValue>
            </ProcessoItem>
            <ProcessoItem style={{ flex: 1 }}>
              <ItemLabel>Data</ItemLabel>
              <ItemValue>{processo.entrada}</ItemValue>
            </ProcessoItem>
          </div>
          <ProcessoItem>
            <ItemLabel>Assunto</ItemLabel>
            <ItemValue>{processo.assunto}</ItemValue>
          </ProcessoItem>
        </div>

        <CloseButton id="fechaDetalhe" onClick={() => onClose && onClose()} />
      </Header>

      <Content>
        <ProcessoItem style={{ marginBottom: '1em' }}>
          <ItemLabel>Interessados</ItemLabel>
          <span>{processo.interessados}</span>
        </ProcessoItem>

        <ProcessoItem>
          <ItemLabel>Descrição</ItemLabel>
          <span>{processo.descricao}</span>
        </ProcessoItem>
      </Content>

      <Footer>
        <Button id="apagaProcesso" onClick={() => apagarProcesso(processo.id)}>
          remover
        </Button>
        <Button id="editProcesso" primary onClick={() => editProcesso(processo.id)}>
          editar
        </Button>
      </Footer>
    </Container>
  );
}

ProcessoDetalhe.propTypes = {
  processo: PropTypes.object,
  editProcesso: PropTypes.func,
  apagarProcesso: PropTypes.func,
  onClose: PropTypes.func,
};

export default ProcessoDetalhe;
