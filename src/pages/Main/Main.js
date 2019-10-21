import React from 'react';

import SearchInput from '../../components/SearchInput/SearchInput';
import { MainPageTitle, MainPageWrapper } from './Main.styles';

const Main = () => {
  return (
    <MainPageWrapper>
      <MainPageTitle>Busca de processos</MainPageTitle>
      <SearchInput />
    </MainPageWrapper>
  );
};

export default Main;
