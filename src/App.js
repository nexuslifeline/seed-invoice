import React from 'react';
import { Route, BrowserRouter, Routes } from 'react-router-dom';

import MainLayout from 'components/Layout/Main';
import BaseLayout from 'components/Layout/Base';
import withAuth from 'hoc/withAuth';

import Signup from 'views/Signup';
import Login from 'views/Login';
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
      <Route path={`/`} element={<BaseLayout />}>
        <Route index element={<Login />} />
        <Route path={`/signup`} element={<Signup />} />
        <Route path={`/test`} element={<TestPage />} />
      </Route>
      <Route path={`/`} element={<MainLayout />}>
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
