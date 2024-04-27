import { createContext, useEffect, useState } from "react";
import { PropTypes } from "prop-types";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import auth from './../firebase/firebase.config';

export const authContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)

  // create user 
  const createUser = (email, pass)=>{
    return createUserWithEmailAndPassword(auth, email, pass)
  }

  //login user 
  const loginUser = (email, pass) =>{
    return signInWithEmailAndPassword(auth, email, pass)
  }

  // logout
  const logoutUser = () =>{
    return signOut(auth)
  }

  // save User 
  useEffect(()=>{
    const subscribe = onAuthStateChanged(auth, currentUser =>{
      setUser(currentUser)
    })
    return () =>{
      subscribe()
    }
  },[])

  const authInfo = { user, setUser, createUser, loginUser, logoutUser };

  return (
    <div>
      <authContext.Provider value={authInfo}>{children}</authContext.Provider>
    </div>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.node,
};

export default AuthProvider;
