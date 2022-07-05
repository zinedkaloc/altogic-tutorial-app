import { useRef, useState } from "react";
import { useHistory, Link } from "react-router-dom";

import { altogic } from "../helpers/altogic";
import { useAuth } from "../context/Auth";

export function Signup() {
  const { user, setUser } = useAuth();
  const { session, setSession } = useAuth();

  const emailRef = useRef();
  const passwordRef = useRef();
  const nameRef = useRef();

  const [errors, setError] = useState(null);

  const history = useHistory();

  async function handleSubmit(e) {
    e.preventDefault();

    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    const name = nameRef.current.value;

    const { user, session, errors } = await altogic.auth.signUpWithEmail(
      email,
      password,
      name
    );

    if (errors) return setError(errors);
    setUser(user);
    setSession(session);
    history.push("/auth-redirect");
  }

  if (user && session) {
    history.push("/");
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div>{errors && JSON.stringify(errors)}</div>
        <br />
        <div style={{ margin: "20px 0" }}>
          <label htmlFor="input-name">Name</label>
          <br />
          <input id="input-name" type="text" ref={nameRef} />
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

          <button type="submit">Sign up</button>
        </div>
      </form>

      <br />

      <p>
        Already have an account? <Link to="/login">Log In</Link>
      </p>
    </>
  );
}
