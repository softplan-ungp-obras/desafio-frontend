import React from 'react';
import PropTypes from 'prop-types';

const Process = props => {
  const { processDetail } = props;

  return <div>{processDetail.id}</div>;
};

Process.propTypes = {
  processDetail: PropTypes.object
};

export default Process;
