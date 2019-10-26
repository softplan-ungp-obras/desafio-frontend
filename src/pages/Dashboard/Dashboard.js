import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Container } from '~/styles/components';
import { HeaderSearch } from '~/components/blocks';
import { DashboardList } from '~/components/sections';
import { Creators as SearchActions } from '~/store/ducks/search';

export default function Dashboard() {
  const dispatch = useDispatch();
  const term = useSelector(state => state.search.term);

  useEffect(() => {
    dispatch(SearchActions.getSearchRequest(term));
  }, [dispatch, term]);

  return (
    <Container>
      <HeaderSearch />
      <DashboardList />
    </Container>
  );
}
