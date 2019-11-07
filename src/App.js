import React, { Suspense } from "react";
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

function App() {
  return (
    <ErrorBoundary>
      <Provider store={store}>
        <Router>
          <Header />
          <Suspense fallback={<div>One moment please ...</div>}>
            <Switch>
              <Route exact path="/" component={Home} />
              <Redirect to="/" />
            </Switch>
          </Suspense>
          <Footer />
        </Router>
      </Provider>
    </ErrorBoundary>
  );
}

export default App;
