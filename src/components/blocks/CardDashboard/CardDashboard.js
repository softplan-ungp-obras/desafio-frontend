import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { Text, Button } from '~/components/elements';
import {
  Box,
  LineOne,
  LineTwo,
  LineThree,
  LineFour,
  SubLineOne,
  Full,
} from './styles';
import { Creators as ProcessActions } from '~/store/ducks/process';

export default function CardDashboard({ id, handleEdit }) {
  const dispatch = useDispatch();
  const findInfo = useSelector(state => state.process.data);

  useEffect(() => {
    dispatch(ProcessActions.getProcessRequest(id));
  }, [dispatch, id]);

  function handleRemove() {
    dispatch(ProcessActions.removeRequest(id));
  }

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
      <LineFour>
        <Button
          level="grey"
          onClick={() =>
            // eslint-disable-next-line no-alert
            window.confirm('Você realmente deseja excluir o processo ?') &&
            handleRemove()
          }
        >
          Remover
        </Button>
        <Button onClick={() => handleEdit('')}>Editar</Button>
      </LineFour>
    </Box>
  );
}

CardDashboard.defaultProps = {
  id: '',
};

CardDashboard.propTypes = {
  id: PropTypes.string,
  handleEdit: PropTypes.func.isRequired,
};
