import React from 'react'
import { Routes as Switch, Route  } from 'react-router-dom'
import Privateroute from './Privateroute'

import SigIn from '../pages/Sigin'
import SigUp from '../pages/Sigup'
import Dashboard from '../pages/Dashboard'
import ForgotPassword from '../pages/ForgotPassword'
import ResetPassword from '../pages/ResetPassword'



const RoutesApp: React.FC = () => (
  <Switch>
    <Route element={<SigIn />} path="/"  />
    <Route element={<SigIn />} path="/login"  />
    <Route element={<SigUp />} path="/cadastrar" />
    <Route element={<ForgotPassword />} path="/forgot-password" />
    <Route element={<ResetPassword />} path="/reset-password" />
    <Route
          path="/dashboard"
          element={
            <Privateroute />
          }
      >
        <Route path="/dashboard" element={<Dashboard />} />
      </Route>
  </Switch>
)

export default RoutesApp