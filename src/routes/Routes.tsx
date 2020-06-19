import React, { Suspense } from 'react'
import { Switch, Route } from 'react-router-dom'
import { Spin } from 'antd'

const Monsters = React.lazy(() => import('./Monsters'))
const Dashboard = React.lazy(() => import('./Dashboard'))

export enum PATHS {
  MONSTERS = '/',
  DASHBOARD = '/dashboard',
}

const loadingComponent = (
  <div
    data-test-id="xf-lazy-loading-icon"
    style={{
      width: '100vw',
      height: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'white',
      position: 'fixed',
      top: '0px',
      left: '0px',
    }}
  >
    <Spin size="large" />
  </div>
)

export default function () {
  return (
    <Suspense fallback={loadingComponent}>
      <Switch>
        <Route exact path={PATHS.MONSTERS} component={Monsters} />
        <Route exact path={PATHS.DASHBOARD} component={Dashboard} />
      </Switch>
    </Suspense>
  )
}
