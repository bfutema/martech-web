import React from 'react';

import { Container } from './Loading.styles';

export type Size = 'sm' | 'md' | 'lg';

interface LoadingProps {
  size?: Size;
}

export const Loading: React.FC<LoadingProps> = ({ size = 'lg' }) => {
  return (
    <Container data-testid="loading-container" size={size}>
      <svg viewBox="25 25 50 50">
        <circle cx="50" cy="50" r="20" fill="none" />
      </svg>
    </Container>
  );
};
