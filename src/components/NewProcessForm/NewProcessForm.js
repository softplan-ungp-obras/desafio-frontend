import React, { useState } from 'react';
import { useDebouncedCallback } from 'use-debounce';
import { isEqual } from 'lodash';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { Label } from './NewProcessForm.styles';

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

  const handleInterestedIncrement = filename => {
    const { value } = interestedInput;
    SetFormData({
      ...formData,
      [filename]: [...formData.interessados, value]
    });
  };

  const onSubmit = e => {
    e.preventDefault();
    const formIsEmpty = isEqual(formData, initialState);
    if (formIsEmpty) return;
    createProcess(formData);
  };

  console.log(formData);

  return (
    <div>
      <h2>Cadastro de processo</h2>
      <form onSubmit={onSubmit}>
        <div>
          <Label htmlFor="subject">assunto</Label>
          <input
            id="subject"
            type="text"
            name="subject"
            onChange={e => debouncedCallback(e.target.value, 'assunto')}
          />
        </div>
        <div>
          <Label htmlFor="interested">Interessados</Label>
          <ul>
            <li>Marcio</li>
            <li>Julia</li>
          </ul>
          <input
            ref={input => {
              interestedInput = input;
            }}
            id="interested"
            type="text"
            name="interested"
          />
          <button
            type="button"
            onClick={() => handleInterestedIncrement('interessados')}
          >
            adicionar
          </button>
        </div>
        <div>
          <Label htmlFor="description">Descrição</Label>
          <textarea
            id="description"
            name="description"
            onChange={e => debouncedCallback(e.target.value, 'descricao')}
          />
        </div>
        <button type="submit">salvar</button>
      </form>
    </div>
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
