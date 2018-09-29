import React from 'react';
import styled from 'styled-components';
import Theme from '../../config/Theme';

function ProcessoInfo({ processo, onSelect, compacto = false, ativo = false }) {
  const Container = styled.div`
    font: inherit;
    padding: 13px;
    display: flex;
    flex-flow: wrap;
    flex-direction: row;
    align-content: space-between;
    border: solid 0.5px ${Theme.colors.black_54};
    border-width: ${!ativo ? '0.5px' : '2px'};
    border-color: ${!ativo ? Theme.colors.black_38 : Theme.colors.primary};
    color: ${!ativo ? 'inherit' : Theme.colors.primary};
    margin-top: 50px;

    height: 107px;
    width: ${!compacto ? '1044px' : '463px'};

    -webkit-box-shadow: 0px 3px 8px 0px ${Theme.colors.boxShadow};
    -moz-box-shadow: 0px 3px 8px 0px ${Theme.colors.boxShadow};
    box-shadow: 0px 3px 8px 0px ${Theme.colors.boxShadow};
  `;

  const ProcessoImagem = styled.div`
    height: 85px;
    width: 85px;
    background-color: ${Theme.colors.black_38};
  `;

  const ProcessoItem = styled.div`
    flex-direction: column;
    align-content: center;

    width: ${!compacto ? '225px' : '215px'};
  `;

  const ItemLabel = styled.span`
    font-weight: bold;
    font-size: 14px;
    margin-top: ${!compacto ? '10px' : '0'};
    color: ${!ativo ? Theme.colors.black_54 : Theme.colors.primary};
  `;

  const descricaoToShow =
    processo.descricao.length <= 26 ? processo.descricao : processo.descricao.substring(0, 26) + '...';

  return (
    <Container onClick={() => onSelect(processo.id)}>
      <ProcessoItem style={compacto ? { display: 'none' } : { width: '100px' }}>
        <ProcessoImagem>Img</ProcessoImagem>
      </ProcessoItem>
      <ProcessoItem>
        <ItemLabel>Número</ItemLabel>
        <span style={{ display: 'flex', alignItems: 'flex-start', marginTop: compacto ? '0px' : '16px' }}>
          {processo.numero || ''}
        </span>
      </ProcessoItem>
      <ProcessoItem>
        <ItemLabel>Assunto</ItemLabel>
        <span style={{ display: 'flex', alignItems: 'flex-start', marginTop: compacto ? '0px' : '16px' }}>
          {processo.assunto || ''}
        </span>
      </ProcessoItem>
      <ProcessoItem>
        <ItemLabel>Interessado</ItemLabel>
        <span style={{ display: 'flex', alignItems: 'flex-start', marginTop: compacto ? '0px' : '16px' }}>
          {processo.interessados && processo.interessados.length > 0 ? processo.interessados[0] : ''}
        </span>
      </ProcessoItem>
      <ProcessoItem style={compacto ? { display: 'none' } : null}>
        <ItemLabel>Descrição</ItemLabel>
        <span style={{ display: 'flex', alignItems: 'flex-start', marginTop: compacto ? '0px' : '16px' }}>
          {descricaoToShow}
        </span>
      </ProcessoItem>
    </Container>
  );
}

export default ProcessoInfo;
