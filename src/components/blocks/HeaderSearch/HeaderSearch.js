import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useDebouncedCallback } from 'use-debounce';
import { Box } from './styles';
import { Text, Input, Button } from '~/components/elements';
import { Creators as SearchActions } from '~/store/ducks/search';

export default function HeaderSearch() {
  const dispatch = useDispatch();
  const termSearch = useSelector(state => state.search.term);

  function handleLoading(val) {
    dispatch(SearchActions.setLoading(val));
  }

  const [handleChange] = useDebouncedCallback(value => {
    dispatch(SearchActions.getSearchRequest(value, true));
    handleLoading(false);
  }, 300);

  return (
    <Box>
      <div>
        <Text as="span" level="1">
          Busca de Processos
        </Text>
      </div>
      <div>
        <Input
          placeholder="Pesquise por uma informação no processo"
          onChange={e => {
            handleLoading(true);
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
