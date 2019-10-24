import React from 'react';
import PropTypes from 'prop-types';

import {
  ProcessRow,
  ProcessColumn,
  ColumnHeader,
  ColumnText
} from './Process.styles';

const Process = props => {
  const { process } = props;
  return (
    <ProcessRow>
      <ProcessColumn>
        <img src="https://via.placeholder.com/80" alt="" />
      </ProcessColumn>
      <ProcessColumn margin="0 20% 0 0">
        <ColumnHeader>Número</ColumnHeader>
        <ColumnText>{process.numero}</ColumnText>
      </ProcessColumn>
      <ProcessColumn>
        <ColumnHeader>Assunto</ColumnHeader>
        <ColumnText>{process.assunto}</ColumnText>
      </ProcessColumn>
      <ProcessColumn margin="0 10% 0 0">
        <ColumnHeader>Interessado</ColumnHeader>
        <ColumnText>{process.interessados[0]}</ColumnText>
      </ProcessColumn>
      <ProcessColumn>
        <ColumnHeader>Descrição</ColumnHeader>
        <ColumnText>{process.descricao}</ColumnText>
      </ProcessColumn>
    </ProcessRow>
  );
};

Process.propTypes = {
  process: PropTypes.object
};

export default Process;
