import { Navigate } from 'react-router-dom';

import useAuthStore from '@store/auth';

export const ProtectedRoute = ({ children }) => {
  const { authUser } = useAuthStore();
  if (false) {
    return <Navigate to='/' />;
  }
  return children;
};
