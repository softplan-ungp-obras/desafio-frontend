import React from 'react';
import PropTypes from 'prop-types';

import {
  ProcessWrapper,
  ProcessHeader,
  ImageWrapper,
  ProcessHeaderInfo,
  HeaderInfoLabel,
  HeaderInfoText,
  HeaderInfoWrapper,
  InterestedList,
  DescriptionWrapper
} from './Process.styles';

const Process = props => {
  const { processDetail } = props;

  const breakParagraph = text => {
    const regex = /\r?\n/g;
    return text.split(regex).map((line, index) => {
      return <p key={`key_${index}`}>{line}</p>;
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
    </ProcessWrapper>
  );
};

Process.propTypes = {
  processDetail: PropTypes.object
};

export default Process;
