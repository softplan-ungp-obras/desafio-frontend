import React from 'react';

import SearchInput from '../../components/SearchInput/SearchInput';
import NewProcessLink from '../../components/NewProcessLink/NewProcessLink';
import { MainPageTitle, MainPageWrapper } from './Main.styles';

const Main = () => {
  return (
    <MainPageWrapper>
      <MainPageTitle>Busca de processos</MainPageTitle>
      <SearchInput />
      <NewProcessLink />
    </MainPageWrapper>
  );
};

export default Main;
