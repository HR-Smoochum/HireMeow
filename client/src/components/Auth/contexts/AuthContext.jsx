/* eslint-disable import/no-extraneous-dependencies */
import React, { useState, useContext, useEffect } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';

const AuthContext = React.createContext();

export function useAuth() {
  return useContext(AuthContext);
}

// eslint-disable-next-line react/prop-types
export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState();
  const [loading, setLoading] = useState(true);

  function signup(email, password) {
    return createUserWithEmailAndPassword(auth, email, password);
  }

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  // eslint-disable-next-line react/jsx-no-constructed-context-values
  const value = {
    currentUser,
    signup,
  };

  return (
    <AuthContext.Provider value={value}>
      { !loading && children }
    </AuthContext.Provider>
  );
}
