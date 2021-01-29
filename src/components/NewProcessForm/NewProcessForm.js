import React, { useState } from 'react';
import { useDebouncedCallback } from 'use-debounce';
import { isEqual } from 'lodash';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

import CloseIcon from '../NewProcessModal/CloseIcon';

import {
  Label,
  Title,
  FormInput,
  FormTextArea,
  FieldWrapper,
  FormWrapper,
  AddInterestedButton,
  SaveButton,
  DecrementInterestedButton,
  InterestedList,
  InterestedItem,
  FormSent
} from './NewProcessForm.styles';

import colors from '../../helpers/colors';

import {
  handleAddProcessList,
  handleGetProcessList
} from '../../actions/getProcessList/getProcessList';

const NewProcessForm = props => {
  let interestedInput = null;

  const {
    createProcess,
    location,
    getProcessList,
    processDetail,
    fromProcess
  } = props;

  const initialState = {
    descricao: fromProcess ? processDetail.descricao : '',
    assunto: fromProcess ? processDetail.assunto : '',
    interessados: fromProcess ? processDetail.interessados : []
  };

  const [formData, SetFormData] = useState(initialState);
  const [formSent, SetFormSent] = useState(false);

  const [debouncedCallback] = useDebouncedCallback((value, fieldName) => {
    SetFormData({
      ...formData,
      [fieldName]: value
    });
  }, 500);

  const handleInterestedIncrement = fieldName => {
    const { value } = interestedInput;
    SetFormData({
      ...formData,
      [fieldName]: [...formData.interessados, value]
    });
  };

  const handleInterestedDecrement = (fieldName, interestedToDel) => {
    const updatedList = formData.interessados.filter(
      interested => interested !== interestedToDel
    );
    SetFormData({
      ...formData,
      [fieldName]: updatedList
    });
  };

  const refreshProcessList = () => {
    const searchTerm = location.state ? location.state.searchTerm : '';
    getProcessList(searchTerm);
  };

  const onSubmit = e => {
    e.preventDefault();
    const formIsEmpty = isEqual(formData, initialState);
    if (formIsEmpty) return;
    createProcess(formData).then(() => {
      if (location.pathname !== '/') {
        refreshProcessList();
      }
    });
    SetFormSent(true);
  };

  return (
    <FormWrapper>
      <Title>Cadastro de processo</Title>
      <form onSubmit={onSubmit}>
        <FieldWrapper>
          <Label htmlFor="subject">Assunto</Label>
          <FormInput
            id="subject"
            type="text"
            name="subject"
            defaultValue={formData.assunto}
            onChange={e => debouncedCallback(e.target.value, 'assunto')}
          />
        </FieldWrapper>
        <FieldWrapper>
          {formData.interessados.length >= 1 && <Label>Interessados</Label>}
          <InterestedList>
            {formData.interessados.map(interested => {
              return (
                <InterestedItem key={interested}>
                  {interested}{' '}
                  <DecrementInterestedButton
                    onClick={() =>
                      handleInterestedDecrement('interessados', interested)
                    }
                    type="button"
                  >
                    <CloseIcon size="10px" color={colors.black200} />
                  </DecrementInterestedButton>
                </InterestedItem>
              );
            })}
          </InterestedList>
          <Label>Novo Interessado</Label>
          <FormInput
            ref={input => {
              interestedInput = input;
            }}
            id="interested"
            type="text"
            name="interested"
          />
          <AddInterestedButton
            type="button"
            onClick={() => handleInterestedIncrement('interessados')}
          >
            adicionar
          </AddInterestedButton>
        </FieldWrapper>
        <FieldWrapper width="80%">
          <Label htmlFor="description">Descrição</Label>
          <FormTextArea
            id="description"
            name="description"
            defaultValue={formData.descricao}
            onChange={e => debouncedCallback(e.target.value, 'descricao')}
          />
        </FieldWrapper>
        <FieldWrapper alignToRight width="100%" margin="0">
          {formSent && <FormSent>Processo Salvo!</FormSent>}
          <SaveButton type="submit">salvar</SaveButton>
        </FieldWrapper>
      </form>
    </FormWrapper>
  );
};

const mapStateToProps = ({ processDetail }) => {
  return {
    processDetail: processDetail.data
  };
};

const mapDispatchToProps = {
  createProcess: handleAddProcessList,
  getProcessList: handleGetProcessList
};

NewProcessForm.propTypes = {
  createProcess: PropTypes.func,
  getProcessList: PropTypes.func,
  location: PropTypes.object,
  processDetail: PropTypes.object,
  fromProcess: PropTypes.bool
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(NewProcessForm)
);
