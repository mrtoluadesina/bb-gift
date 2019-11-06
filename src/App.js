import React, {Suspense, lazy} from 'react';
import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom';
import './App.css';
import ErrorBoundary from './common/ErrorBoundary';

function App() {
  return (
    <ErrorBoundary>
    <p>App</p>
    </ErrorBoundary>
  );
}

export default App;
