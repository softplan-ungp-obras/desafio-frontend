import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import history from '~/routes/history';
import { Title, Text } from '~/components/elements';
import { Box, InputStyle, CustomLink } from './styles';
import { Creators as SearchActions } from '~/store/ducks/search';
import { Creators as PortalsActions } from '~/store/ducks/portals';

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

  function handleAddProcess() {
    dispatch(PortalsActions.setModal(true));
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
      </form>
      <div>
        <Text as="span" level="2">
          Você pode criar um novo processo
        </Text>{' '}
        <CustomLink onClick={handleAddProcess}>clicando aqui</CustomLink>
      </div>
    </Box>
  );
}
