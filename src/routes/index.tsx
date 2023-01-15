import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

export const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<div />} />
      </Routes>
    </BrowserRouter>
  );
};
