import React from 'react';
import { RouteProps, Navigate, Outlet  } from 'react-router-dom';

import { useAuth } from '../hooks/AuthContext';

export function PrivateRoute() {
  const { user } = useAuth();
  return !!user ? <Outlet /> : <Navigate to="/login"/>
  
}

export default PrivateRoute;