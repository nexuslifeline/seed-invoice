import React from 'react';
import { Route, BrowserRouter, Routes } from 'react-router-dom';

import MainLayout from 'components/Layout/Main';
import BaseLayout from 'components/Layout/Base';

import Signup from 'views/Signup';
import Login from 'views/Login';
import Dashboard from 'views/Dashboard';
import Settings from 'views/Settings';
import Customers from 'views/Customers';
import Users from 'views/Users';
import Items from 'views/Items';
import Payments from 'views/Payments';
import TestPage from 'views/Test';
import NotFound from 'views/NotFound';
import Invoices from 'views/Invoices';
import Quotes from 'views/Quotes';
import Company from 'views/Company';
import Orders from 'views/Orders';
import Expenses from 'views/Expenses';
import Tax from 'views/Tax';
import Account from 'views/Account';

const Index = () => (
  <BrowserRouter>
    <Routes>
      <Route path={`/`} element={<BaseLayout />}>
        <Route index element={<Login />} />
        <Route path={`/signup`} element={<Signup />} />
        <Route path={`/test`} element={<TestPage />} />
      </Route>
      <Route path={`/`} element={<MainLayout />}>
        <Route path={'dashboard'} element={<Dashboard />} />
        <Route path={'invoices'} element={<Invoices />} />
        <Route path={'quotes'} element={<Quotes />} />
        <Route path={'settings'} element={<Settings />} />
        <Route path={'customers'} element={<Customers />} />
        <Route path={'company'} element={<Company />} />
        <Route path={'orders'} element={<Orders />} />
        <Route path={'expenses'} element={<Expenses />} />
        <Route path={'tax'} element={<Tax />} />
        <Route path={'account'} element={<Account />} />
        <Route path={'users'} element={<Users />} />
        <Route path={'items'} element={<Items />} />
        <Route path={'payments'} element={<Payments />} />
      </Route>
      <Route path='*' element={<NotFound />} />
    </Routes>
  </BrowserRouter>
);

export default Index;
