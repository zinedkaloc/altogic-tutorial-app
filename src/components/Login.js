import { useRef, useState } from "react";
import { useHistory } from "react-router-dom";
import { useAuth } from "../context/Auth";

import { altogic } from "../helpers/altogic";

export function Login() {
  const {setUser} = useAuth()

  const emailRef = useRef();
  const passwordRef = useRef();

  const [errors, setError] = useState(null);

  const history = useHistory();

  async function handleSubmit(e) {
    e.preventDefault();

    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    const { session, errors } = await altogic.auth.signInWithEmail(email, password);
    if (errors) return setError(errors);
    setUser(session)

    history.push("/");
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <br />
        <label htmlFor="input-email">Email</label>
        <br />
        <input id="input-email" type="email" ref={emailRef} />
        <br />
        <label htmlFor="input-password">Password</label>
        <br />
        <input id="input-password" type="password" ref={passwordRef} />
        <br />
        <br />
        <button type="submit">Login</button>
      </form>
      <br />
      <br />

      {errors && <pre>{JSON.stringify(errors, null, 2)}</pre>}
    </>
  );
}
