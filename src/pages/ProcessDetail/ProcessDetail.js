import React, { Fragment, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import ProcessRoster from '../../components/ProcessRoster/ProcessRoster';
import SearchInput from '../../components/SearchInput/SearchInput';
import NewProcessModal from '../../components/NewProcessModal/NewProcessModal';
import Process from '../../components/Process/Process';
import LoadingIcon from '../ProcessList/LoadingIcon';

import colors from '../../helpers/colors';

import { handleGetProcessList } from '../../actions/getProcessList/getProcessList';
import { handleGetProcessDetail } from '../../actions/getProcessDetail/getProcessDetail';

import {
  ProcessListHeaderWrapper,
  HeaderTitle,
  NewProcessButton,
  ProcessListWrapper,
  LoaderWrapper
} from '../ProcessList/ProcessList.styles';

const ProcessDetail = props => {
  const { state } = props.location;
  const { getProcessDetail, getProcessList, processDetail, isLoading } = props;

  const [modalIsOpen, setModalIsOpen] = useState(false);

  const handleModal = () => {
    setModalIsOpen(!modalIsOpen);
  };

  useEffect(() => {
    getProcessList(state.searchTerm);
    getProcessDetail(state.processId);
  }, [state.processId, state.searchTerm, getProcessDetail, getProcessList]);

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
        {isLoading === false && <ProcessRoster reduced />}
        <Process processDetail={processDetail} />
      </ProcessListWrapper>
    </Fragment>
  );
};

const mapStateToProps = ({ processList, processDetail }) => {
  return {
    processDetail: processDetail.data,
    isLoading: processList.isProcessQueryLoading
  };
};

const mapDispatchToProps = {
  getProcessDetail: handleGetProcessDetail,
  getProcessList: handleGetProcessList
};

ProcessDetail.propTypes = {
  location: PropTypes.object,
  processDetail: PropTypes.object,
  getProcessDetail: PropTypes.func,
  getProcessList: PropTypes.func,
  isLoading: PropTypes.bool
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(ProcessDetail)
);
