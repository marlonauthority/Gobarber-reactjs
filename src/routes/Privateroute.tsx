import React from 'react';
import { RouteProps, Navigate  } from 'react-router-dom';

import { useAuth } from '../hooks/AuthContext';

// const PrivateRoute: React.FC<RouteProps> = ({ children }) => {
//   const { user } = useAuth();

//   if (!!user) return children

//   return (
//     <Navigate to='/login' />
//   );
// }

export function PrivateRoute({ children }: RouteProps): JSX.Element {
  const { user } = useAuth();
  return (
    <>
      {!!user
        ? children
        : <Navigate to="/login"/>
      }
    </>
  );
}

export default PrivateRoute;