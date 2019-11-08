import React, { Suspense, lazy } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store";
import './helperFunctions/protos';
import "./App.scss";
import ErrorBoundary from "./common/ErrorBoundary";
import Home from "./pages/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";

//lazy imports
const Login = lazy(() => import('./pages/Login'));
const AppRoute = lazy(() => import('./routes/AppRoutes'));

const isLoggedIn = localStorage.getItem('isLoggedIn')

function App() {
  return (
    <ErrorBoundary>
      <Provider store={store}>
        <Router>
          <Header />
          <Suspense fallback={<div>One moment please ...</div>}>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/login" component={Login} />
              <Route path="/app" component={AppRoute} />
              <Redirect to="/" />
            </Switch>
          </Suspense>
          {!isLoggedIn && <Footer />}
        </Router>
      </Provider>
    </ErrorBoundary>
  );
}

export default App;
