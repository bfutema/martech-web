import React from 'react';

import { IconButton } from '@components/IconButton';

import { Container } from './Sidebar.styles';

export const Sidebar: React.FC = () => {
  return (
    <Container>
      <IconButton icon="Menu" />
    </Container>
  );
};
