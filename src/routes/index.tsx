import React from 'react'
import { Routes as Switch, Route  } from 'react-router-dom'
import Dashboard from '../pages/Dashboard'

import SigIn from '../pages/Sigin'
import SigUp from '../pages/Sigup'
import Privateroute from './Privateroute'

const RoutesApp: React.FC = () => (
  <Switch>
    <Route element={<SigIn />} path="/"  />
    <Route element={<SigIn />} path="/login"  />
    <Route element={<SigUp />} path="/cadastrar" />
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