import React, { useState, useEffect, createContext } from 'react';
import { initializeApp } from 'firebase/app';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';

export const AuthenticationContext = createContext();

export const AuthenticationContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);
  const [isAuthLoading, setIsAuthLoading] = useState(false);

  const onLogin = (email = 'email@email.com', password = 'password1234') => {
    setIsAuthLoading(true);
    const auth = getAuth();

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log('USER', user);
        setUser(user);
        setIsAuthLoading(false);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log('ERROR', errorCode, errorMessage);
        setError(errorMessage);
      });
  };

  return (
    <AuthenticationContext.Provider
      value={(user, isAuthLoading, error, onLogin)}
    >
      {children}
    </AuthenticationContext.Provider>
  );
};

// createUserWithEmailAndPassword(auth, 'email@email.com', 'password1234')
// .then((userCredentials) => {
//   const user = userCredentials.user;
//   console.log('USER', user);
// })
// .catch((error) => {
//   const errorCode = error.code;
//   const errorMessage = error.message;
//   console.log('ERROR', errorCode, errorMessage);
// });
