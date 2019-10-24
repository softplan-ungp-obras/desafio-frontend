import React from 'react';
import { connect } from 'react-redux';

const ProcessRoster = ({ processList }) => {
  return (
    <div>
      <ul>
        {processList.map(process => {
          return <li key={process.id}>{process.numero}</li>;
        })}
      </ul>
    </div>
  );
};

const mapStateToProps = ({ processList }) => {
  return {
    processList: processList.data
  };
};

export default connect(mapStateToProps)(ProcessRoster);
