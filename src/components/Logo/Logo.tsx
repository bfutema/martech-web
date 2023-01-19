import React from 'react';

import { Container, Image } from './Logo.styles';

export const Logo: React.FC = () => {
  return (
    <Container to={{ pathname: '/' }} data-testid="logo-link" title="Início">
      <Image data-testid="logo-svg" />
    </Container>
  );
};
