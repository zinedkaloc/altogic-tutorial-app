import React, { useEffect } from "react";
import { altogic } from "../helpers/altogic";
/* import { useHistory } from "react-router-dom"; */
import { useAuth } from "../context/Auth";

const Redirect = async () => {
  /* const history = useHistory(); */
  const { user, setUser } = useAuth();
  const { setSession } = useAuth();
  useEffect(() => {
    altogic.auth.getAuthGrant().then(({ session, user, errors }) => {
      setUser(user);
      console.log("user", user);
      setSession("session", session);
      if (errors) console.log("***errors", errors);
    });
  }, []);

  /*  else history.replace("/"); */
  return (
    <div>Hello{/* {user && <pre>{JSON.stringify(user, null, 2)}</pre>} */}</div>
  );
};

export default Redirect;
