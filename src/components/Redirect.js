import React, { useEffect } from "react";
import { altogic } from "../helpers/altogic";
import { useHistory } from "react-router-dom";
import { useAuth } from "../context/Auth";

function Redirect() {
  const history = useHistory();
  const { session, setSession } = useAuth();
  const { user, setUser } = useAuth();

  useEffect(() => {
    altogic.auth.getAuthGrant().then(({ session, user, errors }) => {
      setUser(user);
      let abc = altogic.auth.getSession();
      console.log(abc);
      setSession(abc);

      if (errors) console.log("***errors", errors);
      else history.replace("/");
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <h1>
      Hello! user: {user?._id} session :{session?.userId}
    </h1>
  );
}

export default Redirect;
