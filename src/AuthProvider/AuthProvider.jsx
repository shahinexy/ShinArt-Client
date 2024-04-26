import { createContext } from "react";
import { PropTypes } from "prop-types";

export const authContext = createContext();

const AuthProvider = ({ children }) => {
  const sin = "shahin";
  const authInfo = { sin };
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
