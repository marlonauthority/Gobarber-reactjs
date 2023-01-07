import React from 'react'
import { Routes as Switch, Route  } from 'react-router-dom'

import SigIn from '../pages/Sigin'
import SigUp from '../pages/Sigup'

const RoutesApp: React.FC = () => (
  <Switch>
    <Route element={<SigIn />} path="/"  />
    <Route element={<SigUp />} path="/cadastrar" />
  </Switch>
)

export default RoutesApp