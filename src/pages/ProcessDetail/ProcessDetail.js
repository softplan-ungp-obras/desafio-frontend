import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { handleGetProcessDetail } from '../../actions/getProcessDetail/getProcessDetail';

const ProcessDetail = props => {
  const { state } = props.location;
  const { getProcessDetail } = props;

  useEffect(() => {
    getProcessDetail(state.processId);
  }, [state.processId, getProcessDetail]);

  return <div>{props.location.state.processId}</div>;
};

const mapStateToProps = ({ processDetail }) => {
  return {
    processDetail
  };
};

const mapDispatchToProps = {
  getProcessDetail: handleGetProcessDetail
};

ProcessDetail.propTypes = {
  location: PropTypes.object,
  getProcessDetail: PropTypes.func,
  isLoading: PropTypes.bool
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(ProcessDetail)
);
