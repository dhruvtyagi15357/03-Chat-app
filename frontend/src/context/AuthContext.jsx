import { createContext, useContext, useState } from "react";

export const AuthContext = createContext();

export const useAuthContext = () => {
  return useContext(AuthContext);
};

export const AuthContextProvider = ({ children }) => {
  const existingUser = JSON.parse(localStorage.getItem("chat-app"));
  const [AuthUser, setAuthUser] = useState(existingUser || null);

  return (
    <AuthContext.Provider value={{ AuthUser, setAuthUser }}>
      {children}
    </AuthContext.Provider>
  );
};
