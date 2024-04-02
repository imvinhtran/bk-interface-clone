import  React from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from '../pages/HomePage';

export interface IRouterProps {
}

export default function Router (props: IRouterProps) {
  return (
    <Routes>
      <Route path='/' element={<HomePage />}></Route>
    </Routes>
  );
}
