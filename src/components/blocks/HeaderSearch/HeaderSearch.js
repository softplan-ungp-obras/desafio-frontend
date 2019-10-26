import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useDebouncedCallback } from 'use-debounce';
import { Box } from './styles';
import { Text, Input, Button } from '~/components/elements';
import { Creators as SearchActions } from '~/store/ducks/search';

export default function HeaderSearch() {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const termSearch = useSelector(state => state.search.term);

  const [handleChange] = useDebouncedCallback(value => {
    dispatch(SearchActions.getSearchRequest(value, true));
    setLoading(false);
  }, 300);

  return (
    <Box>
      <div>
        <Text as="span" level="1">
          Busca de Processos
        </Text>
      </div>
      <div>
        {loading && 'BUSCANDO:'}
        <Input
          placeholder="Pesquise por uma informação no processo"
          onChange={e => {
            setLoading(true);
            handleChange(e.target.value);
          }}
          name="search"
          value={termSearch}
          icon="SEARCH"
        />
      </div>
      <div>
        <Button>NOVO</Button>
      </div>
    </Box>
  );
}
