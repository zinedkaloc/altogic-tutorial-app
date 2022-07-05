import React, { useEffect } from "react";
import { altogic } from "../helpers/altogic";
/* import { useHistory } from "react-router-dom"; */
import { useAuth } from "../context/Auth";
import useQuery from "../helpers/useQuery"

function Redirect() {
  /* const history = useHistory(); */
  const { user, setUser, setSession } = useAuth();
  const query = useQuery();

  useEffect(() => {
    altogic.auth.getAuthGrant().then(({ session, user, errors }) => {
      setUser(user);
      console.log("user", user);
      setSession("session", session);
      if (errors) console.log("***errors", errors);
    });
  }, []);

  /*  else history.replace("/"); */
  return <div>Hello! {user?._id}</div>;
};

export default Redirect;
