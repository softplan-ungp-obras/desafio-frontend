import React from 'react';
import styled from 'styled-components';
import Theme from '../../config/Theme';
import icon from '../../assets/icons/search.svg';

function SearchInput(props) {
  const SearchContainer = styled.div`
    display: flex;
    padding: 0.7em;
    background: ${Theme.colors.background};
    border: 1px solid ${Theme.colors.black_38};
    width: 30em;

    @media (max-width: 700px) {
      width: 20em;
    }

    -webkit-box-shadow: 0px 3px 8px 0px ${Theme.colors.boxShadow};
    -moz-box-shadow: 0px 3px 8px 0px ${Theme.colors.boxShadow};
    box-shadow: 0px 3px 8px 0px ${Theme.colors.boxShadow};
  `;

  const SearchInput = styled.input`
    font: inherit;
    background: transparent;
    border: none;
    width: 100%;

    &:focus {
      outline: none;
    }
  `;

  const SearchIcon = styled.img`
    height: ${Theme.font.body.fontSize};
    margin-left: ${Theme.font.body.fontSize};
    color: ${Theme.colors.black_38};
  `;

  const inputPlaceholder = 'Pesquise por uma informação do processo';

  return (
    <SearchContainer>
      <SearchInput type="text" placeholder={inputPlaceholder} value={props.value} onChange={props.onChange} />
      <SearchIcon src={icon} alt="logo" />
    </SearchContainer>
  );
}

export default SearchInput;
