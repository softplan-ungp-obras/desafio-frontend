import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import icon from '../../assets/icons/search.svg';

const InputContainer = styled.div`
  flex-direction: row;
  padding: 0.87em 0.7em;
  background: ${(props) => props.theme.whiteColor};
  border: 1px solid ${(props) => props.theme.blackTertiaryColor};
  min-width: 380px;
  width: 30em;

  @media (max-width: 700px) {
    width: 20em;
  }

  -webkit-box-shadow: 0px 3px 8px 0px ${(props) => props.theme.shadowColor};
  -moz-box-shadow: 0px 3px 8px 0px ${(props) => props.theme.shadowColor};
  box-shadow: 0px 3px 8px 0px ${(props) => props.theme.shadowColor};
`;

const InputSearch = styled.input`
  font: inherit;
  background: transparent;
  border: none;
  width: 100%;

  &:focus {
    outline: none;
  }
`;

const Icon = styled.img`
  height: 1em;
  margin-left: 1em;
  color: ${(props) => props.theme.blackTertiaryColor};
`;

class BuscaInput extends Component {
  state = {
    query: null,
  };

  render() {
    const placeholder = 'Pesquise por uma informação do processo';
    const { query } = this.state;

    return (
      <InputContainer>
        <InputSearch
          placeholder={placeholder}
          value={query === null ? this.props.value : query}
          onChange={(e) => {
            this.setState({ query: e.target.value });
          }}
          onKeyPress={(event) => {
            if (event.key == 'Enter') {
              this.props.onSubmit(query);
            }
          }}
        />
        <Icon src={icon} alt="logo" onClick={() => this.props.onSubmit(query)} />
      </InputContainer>
    );
  }
}

BuscaInput.propTypes = {
  value: PropTypes.string,
  onSubmit: PropTypes.func,
};

export default BuscaInput;
