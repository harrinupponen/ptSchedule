import React from 'react';
import './App.css';
import Router from './components/Router.js';
import "bootstrap/dist/css/bootstrap.min.css";
import { useFirebaseAuth } from '@use-firebase/auth';
import AuthenticatedApp from './components/AuthenticatedApp';
import NonAuthenticatedApp from './components/NonAuthenticatedApp';


function App() {
  const {isSignedIn} = useFirebaseAuth();

  return (
    <div className="App">
{isSignedIn ? <AuthenticatedApp /> : <NonAuthenticatedApp />}
    </div>
  );
}

export default App;