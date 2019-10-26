import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import colors from '../../helpers/colors';
import SearchIcon from './SearchIcon';

import { SearchWrapper, Input, InputIcon } from './SearchInput.styles';

import { handleGetProcessList } from '../../actions/getProcessList/getProcessList';
import { handleGetProcessDetail } from '../../actions/getProcessDetail/getProcessDetail';

const SearchInput = props => {
  const { history, location, getProcessList, processDetail } = props;
  const initialState = location.state ? location.state.searchTerm : '';
  const [searchTerm, setSearchTerm] = useState(initialState);

  useEffect(() => {
    setSearchTerm(props.searchValue);
  }, [props]);

  const handleSubmit = e => {
    e.preventDefault();
    if (!searchTerm || searchTerm.length === 0) return;
    if (location.pathname.indexOf('/process-detail/') >= 0) {
      const processId = processDetail.id;

      history.push({
        pathname: `/process-detail/process=${processId}`,
        state: { searchTerm, processId }
      });
      return;
    }
    if (location.pathname !== '/') {
      history.replace({ state: { searchTerm } });
      getProcessList(searchTerm);
      return;
    }
    history.push({
      pathname: '/process-list',
      state: { searchTerm }
    });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <SearchWrapper>
          <Input
            placeholder="Pesquise por uma informação do processo"
            type="text"
            defaultValue={searchTerm}
            onChange={e => setSearchTerm(e.target.value)}
          />
          <InputIcon type="sumit">
            <SearchIcon size="20px" color={colors.black200} />
          </InputIcon>
        </SearchWrapper>
      </form>
    </div>
  );
};

SearchInput.propTypes = {
  history: PropTypes.object,
  location: PropTypes.object,
  searchValue: PropTypes.string,
  getProcessList: PropTypes.func,
  getProcessDetail: PropTypes.func,
  processList: PropTypes.array,
  processDetail: PropTypes.object
};

const mapStateToProps = ({ processList, processDetail }) => {
  return {
    processList: processList.data,
    processDetail: processDetail.data
  };
};

const mapDispatchToProps = {
  getProcessList: handleGetProcessList,
  getProcessDetail: handleGetProcessDetail
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(SearchInput)
);
