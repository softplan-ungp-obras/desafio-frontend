import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { handleGetProcessList } from '../../actions/getProcessList';

import NewProcessModal from '../../components/NewProcessModal/NewProcessModal';
import SearchInput from '../../components/SearchInput/SearchInput';

import {
  ProcessListHeaderWrapper,
  NewProcessButton,
  HeaderTitle
} from './ProcessList.styles';

const ProcessList = props => {
  const { state } = props.location;
  const { getProcessList } = props;

  const [modalIsOpen, setModalIsOpen] = useState(false);

  const handleModal = () => {
    setModalIsOpen(!modalIsOpen);
  };

  useEffect(() => {
    getProcessList(state.searchTerm);
  }, [state.searchTerm, getProcessList]);

  return (
    <ProcessListHeaderWrapper>
      <HeaderTitle>
        Busca de <br /> Processos
      </HeaderTitle>
      <SearchInput searchValue={state.searchTerm} />
      <NewProcessButton onClick={handleModal}>Novo</NewProcessButton>
      <NewProcessModal modalIsOpen={modalIsOpen} handleModal={handleModal} />
    </ProcessListHeaderWrapper>
  );
};

const mapDispatchToProps = {
  getProcessList: handleGetProcessList
};

ProcessList.propTypes = {
  location: PropTypes.object,
  getProcessList: PropTypes.func
};

export default withRouter(
  connect(
    null,
    mapDispatchToProps
  )(ProcessList)
);
