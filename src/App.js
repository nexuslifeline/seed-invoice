import React from 'react';
import { Route, BrowserRouter, Routes } from 'react-router-dom';

import Layout from 'components/Layout/Main';
import withAuth from 'hoc/withAuth';

import Login from 'views/Login';
import Signup from 'views/Signup';
import BaseDashboard from 'views/Dashboard';
import BaseSettings from 'views/Settings';
import BaseCustomers from 'views/Customers';
import BaseUsers from 'views/Users';
import BaseItems from 'views/Items';
import BasePayments from 'views/Payments';
import TestPage from 'views/Test';
import NotFound from 'views/NotFound';

const Dashboard = withAuth(BaseDashboard);
const Settings = withAuth(BaseSettings);
const Customers = withAuth(BaseCustomers);
const Users = withAuth(BaseUsers);
const Items = withAuth(BaseItems);
const Payments = withAuth(BasePayments);

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route exact path={'/'} element={<Login />} />
      <Route exact path={'/test'} element={<TestPage />} />
      <Route exact path={`/signup`} element={<Signup />} />
      <Route path={`/`} element={<Layout />}>
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
