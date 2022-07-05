import { useHistory } from "react-router";
import { useAuth } from "../context/Auth";
import { altogic } from "../helpers/altogic";

import styles from "../App.css";

export function Dashboard() {
  const { user, setUser } = useAuth();
  const { session, setSession } = useAuth();
  const history = useHistory();

  async function handleSignOut() {
    await altogic.auth.signOut();

    setUser(null);
    setSession(null);
    history.push("/login");
  }

  return (
    <div className={styles.container}>
      <h1>Welcome, {user?.userId} </h1>
      <p>Your user informations are like following;</p>
      {user && <pre>{JSON.stringify(user, null, 2)}</pre>}
      <p>Your session informations are like following;</p>
      {session && <pre>{JSON.stringify(session, null, 2)}</pre>}
      <button onClick={handleSignOut}>Sign out</button>
    </div>
  );
}
