import { createContext, useEffect, useState } from "react";
import { PropTypes } from "prop-types";
import {
  GithubAuthProvider,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import auth from "./../firebase/firebase.config";

export const authContext = createContext();

const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loader, setLoader] = useState(true)

  // create user
  const createUser = (email, pass) => {
    setLoader(true)
    return createUserWithEmailAndPassword(auth, email, pass);
  };

  //login user
  const loginUser = (email, pass) => {
    setLoader(true)
    return signInWithEmailAndPassword(auth, email, pass);
  };

  // google login
  const googleLogin = () => {
    setLoader(true)
    return signInWithPopup(auth, googleProvider);
  };

  // github login
  const githubLogin = () => {
    setLoader(true)
    return signInWithPopup(auth, githubProvider);
  };

  // update user
  const updateUser = (name, photo) => {
    setLoader(true)
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photo
    });
  };

  // logout
  const logoutUser = () => {
    setLoader(true)
    return signOut(auth);
  };

  // save User
  useEffect(() => {
    const subscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoader(false)
    });
    return () => {
      subscribe();
    };
  }, []);

  const authInfo = {
    user,
    setUser,
    createUser,
    loginUser,
    logoutUser,
    googleLogin,
    githubLogin,
    updateUser,
    loader
  };

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
