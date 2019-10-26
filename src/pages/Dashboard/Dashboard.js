import React from 'react';
import { Container } from '~/styles/components';
import { HeaderSearch } from '~/components/blocks';
import { DashboardList } from '~/components/sections';

export default function Dashboard() {
  return (
    <Container>
      <HeaderSearch />
      <DashboardList />
    </Container>
  );
}
