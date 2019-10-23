import React, { useState } from 'react';
import { useDebouncedCallback } from 'use-debounce';
import { isEqual } from 'lodash';
import { connect } from 'react-redux';
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
  InterestedItem
} from './NewProcessForm.styles';

import colors from '../../helpers/colors';

import { handleAddProcessList } from '../../actions/getProcessList';

const NewProcessForm = props => {
  let interestedInput = null;

  const initialState = {
    descricao: '',
    assunto: '',
    interessados: []
  };

  const { createProcess } = props;

  const [formData, SetFormData] = useState(initialState);

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

  const onSubmit = e => {
    e.preventDefault();
    const formIsEmpty = isEqual(formData, initialState);
    if (formIsEmpty) return;
    createProcess(formData);
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
            onChange={e => debouncedCallback(e.target.value, 'assunto')}
          />
        </FieldWrapper>
        <FieldWrapper>
          <Label>Interessados</Label>
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
            onChange={e => debouncedCallback(e.target.value, 'descricao')}
          />
        </FieldWrapper>
        <FieldWrapper alignToRight width="100%" margin="0">
          <SaveButton type="submit">salvar</SaveButton>
        </FieldWrapper>
      </form>
    </FormWrapper>
  );
};

const mapDispatchToProps = {
  createProcess: handleAddProcessList
};

NewProcessForm.propTypes = {
  createProcess: PropTypes.func
};

export default connect(
  null,
  mapDispatchToProps
)(NewProcessForm);
