import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Theme from '../../config/Theme';
import icon from '../../assets/icons/search.svg';

const InputContainer = styled.div`
  display: flex;
  padding: 0.87em 0.7em;
  background: ${Theme.colors.background};
  border: 1px solid ${Theme.colors.black_38};
  min-width: 380px;
  width: 30em;

  @media (max-width: 700px) {
    width: 20em;
  }

  -webkit-box-shadow: 0px 3px 8px 0px ${Theme.colors.boxShadow};
  -moz-box-shadow: 0px 3px 8px 0px ${Theme.colors.boxShadow};
  box-shadow: 0px 3px 8px 0px ${Theme.colors.boxShadow};
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
  height: ${Theme.font.body.fontSize};
  margin-left: ${Theme.font.body.fontSize};
  color: ${Theme.colors.black_38};
`;

class BuscaInput extends Component {
  state = {
    query: this.props.value || '',
  };

  render() {
    const placeholder = 'Pesquise por uma informação do processo';
    const { query } = this.state;

    return (
      <InputContainer>
        <InputSearch
          placeholder={placeholder}
          value={query}
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
};

export default BuscaInput;
