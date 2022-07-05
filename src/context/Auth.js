import React, { useContext, useState, useEffect } from "react";
import { altogic } from "../helpers/altogic";

const AuthContext = React.createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [user, setUser] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const session = altogic.auth.getSession();
    debugger;
    setUser(session ?? null);
    setLoading(false);
  }, []);

  const value = {
    user,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}
