import { useContext } from "react";
import { authContext } from "../AuthProvider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import { PropTypes } from "prop-types";

const PrivateRoute = ({ children }) => {
  const { user,loader } = useContext(authContext);
  const location = useLocation()
  console.log(location);
  if(loader){
    return <div className="w-full h-screen flex justify-center items-center text-forth"><span className="loading loading-infinity loading-lg"></span></div>
  }

  if (user) {
    return children;
  }

  return <Navigate to={"/login"} state={location.pathname}></Navigate>;
};

PrivateRoute.propTypes = {
  children: PropTypes.node,
};

export default PrivateRoute;
