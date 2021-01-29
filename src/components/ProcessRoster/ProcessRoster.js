import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import ProcessSummary from '../ProcessSummary/ProcessSummary';

import { List, ListItem, NoResults } from './ProcessRoster.styles';

const ProcessRoster = ({ processList, reduced }) => {
  return (
    <Fragment>
      {processList.length > 0 ? (
        <List isListReduced={reduced}>
          {processList.map(process => {
            return (
              <ListItem key={process.id}>
                <ProcessSummary isListReduced={reduced} process={process} />
              </ListItem>
            );
          })}
        </List>
      ) : (
        <NoResults>Nenhum resultado para sua busca</NoResults>
      )}
    </Fragment>
  );
};

const mapStateToProps = ({ processList }) => {
  return {
    processList: processList.data
  };
};

ProcessRoster.propTypes = {
  processList: PropTypes.array,
  reduced: PropTypes.bool
};

export default connect(mapStateToProps)(ProcessRoster);
