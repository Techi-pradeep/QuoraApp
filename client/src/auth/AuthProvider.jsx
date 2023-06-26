import { useEffect, useState } from "react";

// js-cookies
import Cookies from "js-cookie";
// prop-types  -removing children =>prop validation error
import PropTypes from "prop-types";


import AuthContext from "./AuthContext"

const AuthProvider = ({ children }) => {
 
  const [authenticated, setAuthenticated] = useState(false);

  // const [authUser, setAuthUser] = useState({});

  useEffect(() => {
    let showCookies = Cookies.get("firbase_token");
    console.log("Cookies", showCookies);

    if (!showCookies) {
      setAuthenticated(false);
    } else {
      setAuthenticated(true);
    }
  }, []);

  console.log("User is authenticated in Authprovider", authenticated);
  return (
    <AuthContext.Provider value={{ authenticated,setAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
};

/**
 The PropTypes.node.isRequired validation ensures that children is passed as a prop to the PostProvider component. Without that validation, you'll get a warning in the console when using the component.
 */

 AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AuthProvider;
