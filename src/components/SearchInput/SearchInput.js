import React, { useState, useEffect } from 'react';

const SearchInput = props => {
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    setSearchTerm('');
  }, [props]);

  return (
    <div>
      <form>
        <input
          placeholder="Pesquise por uma informação do processo"
          type="text"
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
        />
      </form>
    </div>
  );
};

export default SearchInput;
