import React from 'react';
import { Outlet } from 'react-router-dom';

import { Sidebar } from './Sidebar';

import { Container } from './MainLayout.styles';

export const MainLayout: React.FC = () => {
  return (
    <Container data-testid="main-layout-container">
      <Sidebar />

      <Outlet />
    </Container>
  );
};
