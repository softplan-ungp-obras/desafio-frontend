import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

import colors from '../../helpers/colors';
import SearchIcon from './SearchIcon';

import { SearchWrapper, Input, InputIcon } from './SearchInput.styles';

const SearchInput = props => {
  const [searchTerm, setSearchTerm] = useState('');
  const { history } = props;

  useEffect(() => {
    setSearchTerm(props.searchValue);
  }, [props]);

  const handleSubmit = e => {
    e.preventDefault();
    if (searchTerm.length === 0) return;
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
  searchValue: PropTypes.string
};

export default withRouter(SearchInput);
