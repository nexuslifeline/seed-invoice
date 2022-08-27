import React from 'react';
import { Route, BrowserRouter, Routes } from 'react-router-dom';

import Layout from 'components/Layout';
import { ProtectedRoute } from 'router/ProtectedRoute';

import Login from 'views/Login';
import Signup from 'views/Signup';
import Dashboard from 'views/Dashboard';
import Settings from 'views/Settings';
import Customers from 'views/Customers';
import Users from 'views/Users';
import Items from 'views/Items';
import Payments from 'views/Payments';
import NotFound from 'views/NotFound';

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route exact path={'/'} element={<Login />} />
      <Route exact path={`/signup`} element={<Signup />} />
      <Route
        path={`/`}
        element={
          <ProtectedRoute>
            <Layout />
          </ProtectedRoute>
        }>
        <Route path={'dashboard'} element={<Dashboard />} />
        <Route path={'settings'} element={<Settings />} />
        <Route path={'customers'} element={<Customers />} />
        <Route path={'users'} element={<Users />} />
        <Route path={'items'} element={<Items />} />
        <Route path={'payments'} element={<Payments />} />
      </Route>
      <Route path='*' element={<NotFound />} />
    </Routes>
  </BrowserRouter>
);

export default App;
