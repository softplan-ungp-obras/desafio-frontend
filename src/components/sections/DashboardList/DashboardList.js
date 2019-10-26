import React from 'react';
import { useSelector } from 'react-redux';
import { Loading, Text } from '~/components/elements';
import { Box, Overlay, List, Relative, NotResult } from './styles';
import TOOLS from '~/utils/tools';

export default function DashboardList() {
  const items = useSelector(state => state.search.data);
  const loading = useSelector(state => state.search.loading);

  return (
    <Box>
      <div />
      <Relative>
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

                {TOOLS.limitText(item.descricao, 30)}
              </div>
            </List>
          ))
        ) : (
          <NotResult className="title" as="h3" level="title">
            {!loading && 'Nenhum Resultado Encontrado'}
          </NotResult>
        )}
        {loading && (
          <Overlay>
            <Loading />
          </Overlay>
        )}
      </Relative>
    </Box>
  );
}
