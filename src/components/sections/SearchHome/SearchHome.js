import React, { useState } from 'react';
import { Title, Input } from '~/components/elements';
import { Box } from './styles';

export default function SearchHome() {
  const [formData, setFormData] = useState({
    search: '',
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setFormData({
      ...formData,
      [name]: value,
    });
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
    </Box>
  );
}
