import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

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
        <input
          placeholder="Pesquise por uma informação do processo"
          type="text"
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
        />
        <button type="sumit">enviar</button>
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
