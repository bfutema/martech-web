import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Suppliers } from '../pages/Main';

export const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Suppliers />} />
      </Routes>
    </BrowserRouter>
  );
};
