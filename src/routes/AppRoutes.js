import React, {Suspense, lazy} from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';

const AssociateDashboard = lazy(() => import('../pages/app/AssociateDashboard'));

export default function AppRoutes() {
  return (
    <Suspense fallback={<div>One moment please ...</div>}>
      <Switch>
        <Route path="/app/associate/dashboard" component={AssociateDashboard} />
        <Redirect to="/app" />
      </Switch>
    </Suspense>
  )
}