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
  const { process, location, isListReduced } = props;

  const isProcessActive =
    location.pathname === `/process-detail/process=${process.id}`;

  return (
    <ProcessRow isProcessActive={isProcessActive}>
      <Link
        style={{ ...LinkStyles }}
        to={{
          pathname: `/process-detail/process=${process.id}`,
          state: { ...location.state, processId: process.id }
        }}
      >
        <ProcessColumn isListReduced={isListReduced}>
          <img src="https://via.placeholder.com/80" alt="" />
        </ProcessColumn>
        <ProcessColumn margin="0 10% 0 0">
          <ColumnHeader
            isProcessActive={isProcessActive}
            isListReduced={isListReduced}
          >
            Número
          </ColumnHeader>
          <ColumnText
            isProcessActive={isProcessActive}
            isListReduced={isListReduced}
          >
            {process.numero}
          </ColumnText>
        </ProcessColumn>
        <ProcessColumn>
          <ColumnHeader
            isProcessActive={isProcessActive}
            isListReduced={isListReduced}
          >
            Assunto
          </ColumnHeader>
          <ColumnText
            isProcessActive={isProcessActive}
            isListReduced={isListReduced}
          >
            {process.assunto}
          </ColumnText>
        </ProcessColumn>
        <ProcessColumn margin="0 10% 0 0">
          <ColumnHeader isProcessActive={isProcessActive}>
            Interessado
          </ColumnHeader>
          <ColumnText isProcessActive={isProcessActive}>
            {process.interessados[0] === undefined
              ? 'n/a'
              : process.interessados[0]}
          </ColumnText>
        </ProcessColumn>
        <ProcessColumn isListReduced={isListReduced}>
          <ColumnHeader isProcessActive={isProcessActive}>
            Descrição
          </ColumnHeader>
          <ColumnText isProcessActive={isProcessActive}>
            {process.descricao}
          </ColumnText>
        </ProcessColumn>
      </Link>
    </ProcessRow>
  );
};

ProcessSummary.propTypes = {
  process: PropTypes.object,
  location: PropTypes.object,
  isListReduced: PropTypes.bool
};

export default withRouter(ProcessSummary);
