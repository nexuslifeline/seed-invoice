import React from 'react';
import { QueryClientProvider } from '@tanstack/react-query';

import { UserProvider } from '@context/User';
import { queryClient } from '@query/queryClient';
import AppRoutes from './router';

const App = () => (
  <QueryClientProvider client={queryClient}>
    <UserProvider>
      <AppRoutes />
    </UserProvider>
  </QueryClientProvider>
);

export default App;
