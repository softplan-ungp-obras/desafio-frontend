import React, { Fragment, useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import colors from '../../helpers/colors';

import { handleGetProcessList } from '../../actions/getProcessList';

import NewProcessModal from '../../components/NewProcessModal/NewProcessModal';
import SearchInput from '../../components/SearchInput/SearchInput';
import ProcessRoster from '../../components/ProcessRoster/ProcessRoster';

import LoadingIcon from './LoadingIcon';
import {
  ProcessListHeaderWrapper,
  NewProcessButton,
  HeaderTitle,
  ProcessListWrapper,
  LoaderWrapper
} from './ProcessList.styles';

const ProcessList = props => {
  const { state } = props.location;
  const { getProcessList, isLoading } = props;

  const [modalIsOpen, setModalIsOpen] = useState(false);

  const handleModal = () => {
    setModalIsOpen(!modalIsOpen);
  };

  useEffect(() => {
    getProcessList(state.searchTerm);
  }, [state.searchTerm, getProcessList]);

  return (
    <Fragment>
      <ProcessListHeaderWrapper>
        <HeaderTitle>
          Busca de <br /> Processos
        </HeaderTitle>
        <SearchInput searchValue={state.searchTerm} />
        <NewProcessButton onClick={handleModal}>Novo</NewProcessButton>
        <NewProcessModal modalIsOpen={modalIsOpen} handleModal={handleModal} />
      </ProcessListHeaderWrapper>
      <ProcessListWrapper>
        {isLoading && (
          <LoaderWrapper>
            <LoadingIcon size="80px" color={colors.black200} />
          </LoaderWrapper>
        )}
        {isLoading === false && <ProcessRoster />}
      </ProcessListWrapper>
    </Fragment>
  );
};

const mapStateToProps = ({ processList }) => {
  return {
    isLoading: processList.isProcessQueryLoading
  };
};

const mapDispatchToProps = {
  getProcessList: handleGetProcessList
};

ProcessList.propTypes = {
  location: PropTypes.object,
  getProcessList: PropTypes.func,
  isLoading: PropTypes.bool
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(ProcessList)
);
