// js-cookies
import Cookies from "js-cookie";
import { useEffect, useState } from "react";



import AuthContext from "./AuthContext"

const AuthProvider = ({ children }) => {
 
  const [authenticated, setAuthenticated] = useState(false);

  const [authUser, setAuthUser] = useState({});

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
    <AuthContext.Provider value={{ authenticated, authUser, setAuthUser,setAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
