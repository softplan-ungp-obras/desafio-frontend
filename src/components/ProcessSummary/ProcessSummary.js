import React from 'react';
import PropTypes from 'prop-types';
import { Link, withRouter } from 'react-router-dom';

import {
  ProcessRow,
  ProcessColumn,
  ColumnHeader,
  ColumnText,
  LinkStyles
} from './ProcessSummary.styles';

const ProcessSummary = props => {
  const { process, location } = props;

  return (
    <ProcessRow>
      <Link
        style={{ ...LinkStyles }}
        to={{
          pathname: `/process-detail/process=${process.id}`,
          state: { ...location.state, processId: process.id }
        }}
      >
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
      </Link>
    </ProcessRow>
  );
};

ProcessSummary.propTypes = {
  process: PropTypes.object,
  location: PropTypes.object
};

export default withRouter(ProcessSummary);
