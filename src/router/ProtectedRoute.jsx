import { Navigate } from 'react-router-dom';

export const ProtectedRoute = ({ children }) => {
  console.log('protected!');
  const user = {};
  if (!user) {
    return <Navigate to='/' />;
  }
  return children;
};
