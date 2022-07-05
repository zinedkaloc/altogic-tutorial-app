import { useHistory } from "react-router";
import { useAuth } from "../context/Auth";
import { altogic } from "../helpers/altogic";

export function Dashboard() {
  const { user } = useAuth();
  const history = useHistory();

  async function handleSignOut() {
    await altogic.auth.signOut();

    history.push("/login");
  }

  return (
    <div>
      <p>Welcome, {user.userId} </p>
      <button onClick={handleSignOut}>Sign out</button>
    </div>
  );
}
