import React, { useState } from 'react';
import PropTypes from 'prop-types';

import NewProcessModal from '../NewProcessModal/NewProcessModal';

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
  DescriptionText
} from './Process.styles';

const Process = props => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const handleModal = () => {
    setModalIsOpen(!modalIsOpen);
  };

  const { processDetail } = props;

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
  processDetail: PropTypes.object
};

export default Process;
