import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ReqButton from './Components/ReqButton/ReqButton';
import Python from './Components/Courses/Python';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" />
      <Route path="/:title" element={<Python />} />
    </Routes>
  );
};

export default AppRoutes;
