import React, { useContext, useState, useEffect } from "react";
import { altogic } from "../helpers/altogic";

const AuthContext = React.createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [user, setUser] = useState();
  const [session, setSession] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const session = altogic.auth.getSession();
    console.log(session);
    const user = altogic.auth.getUser();
    setUser(user ?? null);
    setSession(session ?? null);
    setLoading(false);
  }, []);

  return (
    <AuthContext.Provider value={{ user, setUser, session, setSession }}>
      {!loading && children}
    </AuthContext.Provider>
  );
}
