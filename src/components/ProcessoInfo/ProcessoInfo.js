import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

function ProcessoInfo({ processo, onSelect, compacto = false, ativo = false }) {
  const Container = styled.div`
    flex-flow: wrap;
    flex-direction: row;
    align-content: space-between;

    height: 6.7em;
    width: ${!compacto ? '65em' : '29em'};
    padding: 0.8em;
    margin-bottom: 1em;

    border: solid 0.5px ${(props) => props.theme.blackSecondaryColor};
    border-width: ${!ativo ? '0.5px' : '2px'};
    border-color: ${(props) => (!ativo ? props.theme.blackTertiaryColor : props.theme.primaryColor)};
    color: ${(props) => (!ativo ? 'inherit' : props.theme.primaryColor)};

    -webkit-box-shadow: 0px 3px 8px 0px ${(props) => props.theme.shadowColor};
    -moz-box-shadow: 0px 3px 8px 0px ${(props) => props.theme.shadowColor};
    box-shadow: 0px 3px 8px 0px ${(props) => props.theme.shadowColor};
  `;

  const ProcessoImagem = styled.div`
    height: 5em;
    width: 5em;
    background-color: ${(props) => props.theme.blackTertiaryColor};
  `;

  const ProcessoItem = styled.div`
    flex-direction: column;
    align-content: center;

    width: ${!compacto ? '14em' : '13em'};
  `;

  const ItemLabel = styled.span`
    font-size: ${(props) => props.theme.subtitleFontSize};
    font-weight: bold;
    margin-top: ${!compacto ? '0.6em' : '0'};
    color: ${(props) => (!ativo ? props.theme.blackSecondaryColor : props.theme.primaryColor)};
  `;

  const ItemValue = styled.span`
    margin-top: ${compacto ? '0' : '1em'};
  `;

  const descricaoToShow =
    processo.descricao.length <= 26 ? processo.descricao : processo.descricao.substring(0, 26) + '...';

  return (
    <Container onClick={() => onSelect(processo.id)}>
      <ProcessoItem style={compacto ? { display: 'none' } : { width: '6.25em' }}>
        <ProcessoImagem />
      </ProcessoItem>

      <ProcessoItem>
        <ItemLabel>Número</ItemLabel>
        <ItemValue>{processo.numero || ''}</ItemValue>
      </ProcessoItem>

      <ProcessoItem>
        <ItemLabel>Assunto</ItemLabel>
        <ItemValue>{processo.assunto || ''}</ItemValue>
      </ProcessoItem>

      <ProcessoItem>
        <ItemLabel>Interessado</ItemLabel>
        <ItemValue>
          {processo.interessados && processo.interessados.length > 0 ? processo.interessados[0] : ''}
        </ItemValue>
      </ProcessoItem>

      <ProcessoItem style={compacto ? { display: 'none' } : null}>
        <ItemLabel>Descrição</ItemLabel>
        <ItemValue>{descricaoToShow}</ItemValue>
      </ProcessoItem>
    </Container>
  );
}

ProcessoInfo.propTypes = {
  processo: PropTypes.object,
  onSelect: PropTypes.func,
  compacto: PropTypes.bool,
  ativo: PropTypes.bool,
};

export default ProcessoInfo;
