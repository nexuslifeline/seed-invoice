import React from 'react';
import { UserProvider } from 'shared/context/User';
import AppRoutes from 'router';

const App = () => (
  <UserProvider initial={{}}>
    <AppRoutes />
  </UserProvider>
);

export default App;
