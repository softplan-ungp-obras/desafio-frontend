import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Title, Input } from '~/components/elements';
import { Box } from './styles';
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

  function handleSubmit() {
    dispatch(SearchActions.getSearchRequest(formData.search));
  }

  return (
    <Box>
      <Title as="1" level="title">
        Busca de Processos
      </Title>
      <Input
        placeholder="Pesquise por uma informação no processo"
        onChange={handleChange}
        name="search"
        value={formData.search}
        icon="SEARCH"
      />
      Você pode criar um novo processo clicando aqui
      <button type="button" onClick={handleSubmit}>
        Enviar
      </button>
    </Box>
  );
}
