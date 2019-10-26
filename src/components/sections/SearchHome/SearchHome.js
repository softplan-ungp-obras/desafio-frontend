import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import history from '~/routes/history';
import { Title, Text } from '~/components/elements';
import { Box, InputStyle, CustomLink } from './styles';
import { Creators as SearchActions } from '~/store/ducks/search';

export default function SearchHome() {
  const [formData, setFormData] = useState({
    search: '',
  });
  const dispatch = useDispatch();

  function handleChange(event) {
    const { name, value } = event.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();

    dispatch(SearchActions.setTerm(formData.search));
    history.push('/dashboard');
  }

  return (
    <Box>
      <form onSubmit={handleSubmit}>
        <Title as="1" level="headline">
          Busca de Processos
        </Title>
        <InputStyle
          placeholder="Pesquise por uma informação no processo"
          onChange={handleChange}
          name="search"
          value={formData.search}
          icon="SEARCH"
          iconPointer
          onSubmit={handleSubmit}
        />
        <Text as="p" level="2">
          Você pode criar um novo processo{' '}
          <CustomLink>clicando aqui</CustomLink>
        </Text>
      </form>
    </Box>
  );
}
