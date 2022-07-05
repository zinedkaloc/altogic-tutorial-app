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
    setUser(session ?? null);
    setLoading(false);
  }, []);

  return (
    <AuthContext.Provider value={{user, setUser}}>
      {!loading && children}
    </AuthContext.Provider>
  );
}
