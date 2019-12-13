import React from 'react';
import { useFirebaseAuth, AuthProvider } from '@use-firebase/auth';
import Button from '@material-ui/core/Button';

const NonAuthenticatedApp = () => {
  const { signIn, signInError, createAuthProvider } = useFirebaseAuth();

  const onSignIn = authProvider => {
    const provider = createAuthProvider(authProvider);
    signIn(provider, {method: 'signInWithPopup'});
  };

  return (
    <div style = {{ backgroundImage : "url('./img/losing_weight')" }}>
      <h1>Welcome To PT Schedule</h1>
      <h2>Please Sign In First</h2>
      <p>
        <Button variant="contained" color="primary" size="big" onClick={() => onSignIn(AuthProvider.GOOGLE)}>
          Sign In with Google
        </Button>
      </p>
      {signInError && <div className="error-message">
        <h3>{signInError.code}</h3>
        {signInError.message}
      </div>}
    </div>
  );
};
export default NonAuthenticatedApp;