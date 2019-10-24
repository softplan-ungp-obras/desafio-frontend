import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Process from '../Process/Process';

import { List, ListItem } from './ProcessRoster.styles';

const ProcessRoster = ({ processList }) => {
  return (
    <List>
      {processList.map(process => {
        return (
          <ListItem key={process.id}>
            <Process process={process} />
          </ListItem>
        );
      })}
    </List>
  );
};

const mapStateToProps = ({ processList }) => {
  return {
    processList: processList.data
  };
};

ProcessRoster.propTypes = {
  processList: PropTypes.array
};

export default connect(mapStateToProps)(ProcessRoster);
