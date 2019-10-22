import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import colors from '../../helpers/colors';
import SearchIcon from './SearchIcon';

import { SearchWrapper, Input, InputIcon } from './SearchInput.styles';

import { handleGetProcessList } from '../../actions/getProcessList';

const SearchInput = props => {
  const [searchTerm, setSearchTerm] = useState('');
  const { getProcessList } = props;

  useEffect(() => {
    setSearchTerm('');
  }, [props]);

  const handleSubmit = e => {
    e.preventDefault();
    getProcessList(searchTerm);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <SearchWrapper>
          <Input
            placeholder="Pesquise por uma informação do processo"
            type="text"
            value={searchTerm}
            onChange={e => setSearchTerm(e.target.value)}
          />
          <InputIcon type="sumit">
            <SearchIcon size="20px" color={colors.black300} />
          </InputIcon>
        </SearchWrapper>
      </form>
    </div>
  );
};

const mapDispachToProps = {
  getProcessList: handleGetProcessList
};

SearchInput.propTypes = {
  getProcessList: PropTypes.func
};

export default connect(
  null,
  mapDispachToProps
)(SearchInput);
