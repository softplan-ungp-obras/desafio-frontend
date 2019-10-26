import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { Text } from '~/components/elements';
import api from '~/services/api';
import { Box, LineOne, LineTwo, LineThree, SubLineOne, Full } from './styles';

export default function CardDashboard({ id }) {
  const items = useSelector(state => state.search.data);

  const findInfo = items.find(item => item.id === id);

  useEffect(() => {
    async function test() {
      const { data } = await api.get(`/processo/${id}`);
      console.log(data);
    }

    test();
  });

  return (
    <Box>
      <LineOne>
        <div>
          <img src="https://via.placeholder.com/120" alt={findInfo.assunto} />
        </div>
        <SubLineOne>
          <div>
            <Text as="span" level="3">
              <strong>Processo</strong>
            </Text>
            <p>{findInfo.numero}</p>
          </div>
          <div>
            <Text as="span" level="3">
              <strong>Data</strong>
            </Text>
            <p>{findInfo.entrada}</p>
          </div>
          <Full>
            <Text as="span" level="3">
              <strong>Assunto</strong>
            </Text>
            <p>{findInfo.assunto}</p>
          </Full>
        </SubLineOne>
      </LineOne>

      <LineTwo>
        <Text as="span" level="3">
          <strong>Interessados</strong>
        </Text>
        <ul>
          {!!findInfo.interessados &&
            findInfo.interessados.map(item => <li>{item}</li>)}
        </ul>
      </LineTwo>

      <LineThree>
        <Text as="span" level="3">
          <strong>Descrição</strong>
        </Text>

        <p> {findInfo.descricao}</p>
      </LineThree>
    </Box>
  );
}

CardDashboard.defaultProps = {
  id: '',
};

CardDashboard.propTypes = {
  id: PropTypes.string,
};
