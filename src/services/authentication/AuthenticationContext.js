import React, { useState, useEffect, createContext } from 'react';
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from 'firebase/auth';

export const AuthenticationContext = createContext();

export const AuthenticationContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);
  const [isAuthLoading, setIsAuthLoading] = useState(false);

  const auth = getAuth();

  const checkLogin = async () => {
    auth.onAuthStateChanged((usr) => {
      if (usr) {
        setUser(usr);
        console.log(usr.email);
        setIsAuthLoading(false);
      } else {
        setIsAuthLoading(false);
      }
    });
  };

  useEffect(() => {
    checkLogin();
  }, []);

  const onLogin = (email, password) => {
    setIsAuthLoading(true);
    // const auth = getAuth();

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
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

  const onLogout = () => {
    auth.signOut();
    setUser(null);
  };

  const onRegister = (email, password, confirmPassword) => {
    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }
    setIsAuthLoading(true);
    // const auth = getAuth();

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredentials) => {
        const user = userCredentials.user;
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
      value={{
        isAuthenticated: !!user,
        user,
        isAuthLoading,
        error,
        onLogin,
        onRegister,
        onLogout,
      }}
    >
      {children}
    </AuthenticationContext.Provider>
  );
};
