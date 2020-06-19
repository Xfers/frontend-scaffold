import React, { Suspense } from 'react'
import { Switch, Route } from 'react-router-dom'

const Monsters = React.lazy(() => import('./Monsters'))
const Dashboard = React.lazy(() => import('./Dashboard'))

export enum PATHS {
  HOME = '/',
  DASHBOARD = '/dashboard',
}

export default function () {
  return (
    <Suspense fallback={<div>loading</div>}>
      <Switch>
        <Route exact path={PATHS.MONSTERS} component={Monsters} />
        <Route exact path={PATHS.DASHBOARD} component={Dashboard} />
      </Switch>
    </Suspense>
  )
}
