import React from 'react';
import { withRouter } from 'react-router-dom';

const ProcessList = props => {
  return <div>{props.location.state.searchTerm}</div>;
};

export default withRouter(ProcessList);
