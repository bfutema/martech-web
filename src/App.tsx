import React from 'react';

import { GlobalStyles } from '@styles/global';

import { Router } from './routes';

export const App: React.FC = () => {
  return (
    <>
      <Router />
      <GlobalStyles />
    </>
  );
};
