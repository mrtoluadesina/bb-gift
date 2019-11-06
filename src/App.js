import React, { Suspense } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";
import "./App.css";
import ErrorBoundary from "./common/ErrorBoundary";
import Home from "./pages/Home";

function App() {
  return (
    <ErrorBoundary>
      <Router>
        <Suspense fallback={<div>One moment please ...</div>}>
          <Switch>
            <Route exact path="/" component={Home} />
            <Redirect to="/" />
          </Switch>
        </Suspense>
      </Router>
    </ErrorBoundary>
  );
}

export default App;
