import React, { useContext, useEffect, useState } from "react";

const authContext = React.createContext();

export const AuthProvider = (props) => {
  const [user, setUser] = useState(
    JSON.parse(sessionStorage.getItem("EventUser")) || ""
  );
  const [isLogin, setIsLogin] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    setIsLogin(!!user);
    setIsAdmin(user?.role === "Admin");

    // if (user) {
    //   setIsLogin(true);
    // } else {
    //   setIsLogin(false);
    // }
    

    // if (user && user.role === "Admin") {
    //   setIsAdmin(true);
    // } else {
    //   setIsAdmin(false);
    // }
  }, [user]);

  const value = {
    user,
    isLogin,
    isAdmin,
    setUser,
    setIsLogin,
    setIsAdmin,
  };

  return (
    <authContext.Provider value={value}>{props.children}</authContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(authContext);
};