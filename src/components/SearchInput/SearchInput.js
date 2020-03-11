import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import colors from '../../helpers/colors';
import SearchIcon from './SearchIcon';

import {
  SearchWrapper,
  Input,
  InputIcon,
  SearchForm
} from './SearchInput.styles';

import { handleGetProcessList } from '../../actions/getProcessList/getProcessList';
import { handleGetProcessDetail } from '../../actions/getProcessDetail/getProcessDetail';

const SearchInput = props => {
  const { history, location, getProcessList, processList } = props;
  const initialState = location.state ? location.state.searchTerm : '';
  const [searchTerm, setSearchTerm] = useState(initialState);

  useEffect(() => {
    setSearchTerm(props.searchValue);
  }, [props]);

  const handleSubmit = e => {
    e.preventDefault();
    if (!searchTerm || searchTerm.length === 0) return;
    if (location.pathname.indexOf('/process-detail/') >= 0) {
      getProcessList(searchTerm);
      const processId = processList[0].id;

      history.push({
        pathname: `/process-detail/process=${processId}`,
        state: { searchTerm, processId }
      });
      return;
    }
    if (
      location.pathname !== '/' &&
      !location.pathname.indexOf('/process-detail/') >= 0
    ) {
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
    <SearchForm onSubmit={handleSubmit}>
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
    </SearchForm>
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

const mapStateToProps = ({ processList }) => {
  return {
    processList: processList.data
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
