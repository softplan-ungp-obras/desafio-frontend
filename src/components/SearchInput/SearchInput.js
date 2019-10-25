import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import colors from '../../helpers/colors';
import SearchIcon from './SearchIcon';

import { SearchWrapper, Input, InputIcon } from './SearchInput.styles';

import { handleGetProcessList } from '../../actions/getProcessList/getProcessList';

const SearchInput = props => {
  const [searchTerm, setSearchTerm] = useState('');
  const { history, location, getProcessList } = props;

  useEffect(() => {
    setSearchTerm(props.searchValue);
  }, [props]);

  const handleSubmit = e => {
    e.preventDefault();
    if (!searchTerm || searchTerm.length === 0) return;
    if (location.pathname !== '/') {
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
  getProcessList: PropTypes.func
};

const mapDispatchToProps = {
  getProcessList: handleGetProcessList
};

export default withRouter(
  connect(
    null,
    mapDispatchToProps
  )(SearchInput)
);
