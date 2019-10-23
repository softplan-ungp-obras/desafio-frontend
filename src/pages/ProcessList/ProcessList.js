import React, { useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import SearchInput from '../../components/SearchInput/SearchInput';

import { handleGetProcessList } from '../../actions/getProcessList';

const ProcessList = props => {
  const { state } = props.location;
  const { getProcessList } = props;

  useEffect(() => {
    getProcessList(state.searchTerm);
  }, [state.searchTerm, getProcessList]);

  return <SearchInput searchValue={state.searchTerm} />;
};

const mapDispatchToProps = {
  getProcessList: handleGetProcessList
};

ProcessList.propTypes = {
  location: PropTypes.object,
  getProcessList: PropTypes.func
};

export default withRouter(
  connect(
    null,
    mapDispatchToProps
  )(ProcessList)
);
