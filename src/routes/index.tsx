import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { MainLayout } from '@layouts/MainLayout';

import { Suppliers } from '../pages/Main';

export const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Suppliers />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
