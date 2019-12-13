import React from 'react';
import { useFirebaseAuth } from '@use-firebase/auth';
import Router from './Router';

const AuthenticatedApp = () => {
  const { user, signOut } = useFirebaseAuth();
  const { displayName, photoURL } = user;

  return (
    <div>
      <h1>Welcome {displayName}</h1>
      {/* <div>
        <img className="avatar" alt={displayName} src={photoURL} />
      </div> */}
      <p>
        <button onClick={signOut}>Sign Out</button>
      </p>
      <Router />
    </div>
  );
};
export default AuthenticatedApp;