import React from 'react';
import { useSelector } from 'react-redux';
import { Loading, Title, Text } from '~/components/elements';
import { Box, Overlay, List } from './styles';
import TOOLS from '~/utils/tools';

export default function DashboardList() {
  const items = useSelector(state => state.search.data);
  const loading = useSelector(state => state.search.loading);

  return (
    <Box>
      {items.length > 0 ? (
        items.map(item => (
          <List key={item.id}>
            <div>
              <img src="https://via.placeholder.com/80" alt={item.assunto} />
            </div>
            <div>
              <Text as="p" level="3">
                <strong>Número</strong>
              </Text>
              {item.numero}
            </div>
            <div>
              <Text as="p" level="3">
                <strong>Assunto</strong>
              </Text>
              {item.assunto}
            </div>
            <div>
              <Text as="p" level="3">
                <strong>Interessado</strong>
              </Text>
              {!!item.interessados && item.interessados[0]}
            </div>
            <div>
              <Text as="p" level="3">
                <strong>Descrição</strong>
              </Text>

              {TOOLS.limitText(item.descricao, 35)}
            </div>
          </List>
        ))
      ) : (
        <Title as="3" level="title">
          Nenhum Resultado Encontrado
        </Title>
      )}
      {loading && (
        <Overlay>
          <Loading />
        </Overlay>
      )}
    </Box>
  );
}
