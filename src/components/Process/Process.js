import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import NewProcessModal from '../NewProcessModal/NewProcessModal';

import { handleDeleteProcess } from '../../actions/getProcessList/getProcessList';

import {
  ProcessWrapper,
  ProcessHeader,
  ImageWrapper,
  ProcessHeaderInfo,
  HeaderInfoLabel,
  HeaderInfoText,
  HeaderInfoWrapper,
  InterestedList,
  DescriptionWrapper,
  EditButton,
  ProcessActions,
  DescriptionText,
  DeleteButton
} from './Process.styles';

const Process = props => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const { processDetail, deleteProcess } = props;

  const handleModal = () => {
    setModalIsOpen(!modalIsOpen);
  };

  const breakParagraph = text => {
    const regex = /\r?\n/g;
    return text.split(regex).map((line, index) => {
      return <DescriptionText key={`key_${index}`}>{line}</DescriptionText>;
    });
  };

  return (
    <ProcessWrapper>
      <ProcessHeader>
        <ImageWrapper>
          <img src="https://via.placeholder.com/110" alt="" />
        </ImageWrapper>
        <ProcessHeaderInfo>
          <HeaderInfoWrapper>
            <HeaderInfoLabel>Processo</HeaderInfoLabel>
            <HeaderInfoText>{processDetail.numero}</HeaderInfoText>
          </HeaderInfoWrapper>
          <HeaderInfoWrapper>
            <HeaderInfoLabel>Data</HeaderInfoLabel>
            <HeaderInfoText>{processDetail.entrada}</HeaderInfoText>
          </HeaderInfoWrapper>
          <HeaderInfoWrapper width="100%">
            <HeaderInfoLabel>Assunto</HeaderInfoLabel>
            <HeaderInfoText>{processDetail.assunto}</HeaderInfoText>
          </HeaderInfoWrapper>
        </ProcessHeaderInfo>
      </ProcessHeader>
      <div>
        <HeaderInfoLabel>Interessados</HeaderInfoLabel>
        <InterestedList>
          {processDetail.interessados.map(interested => {
            return <li key={interested}>{interested}</li>;
          })}
        </InterestedList>
      </div>
      <DescriptionWrapper>
        <HeaderInfoLabel>Descrição</HeaderInfoLabel>
        {breakParagraph(processDetail.descricao)}
      </DescriptionWrapper>
      <ProcessActions>
        <DeleteButton onClick={() => deleteProcess(processDetail.id)}>
          Remover
        </DeleteButton>
        <EditButton onClick={handleModal}>Editar</EditButton>
      </ProcessActions>
      <NewProcessModal
        fromProcess
        modalIsOpen={modalIsOpen}
        handleModal={handleModal}
      />
    </ProcessWrapper>
  );
};

Process.propTypes = {
  processDetail: PropTypes.object,
  deleteProcess: PropTypes.func
};

const mapDispatchToProps = {
  deleteProcess: handleDeleteProcess
};

export default connect(
  null,
  mapDispatchToProps
)(Process);
