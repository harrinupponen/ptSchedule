import React from 'react';
import { useFirebaseAuth } from '@use-firebase/auth';
import Router from './Router';
import Button from '@material-ui/core/Button';

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
        <Button variant="contained" color="primary" size="big" onClick={signOut}>Sign Out</Button>
      </p>
      <Router />
    </div>
  );
};
export default AuthenticatedApp;