import { useRef, useState } from "react";
import { useHistory, Link } from "react-router-dom";

import { altogic } from "../helpers/altogic";

export function Signup() {
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

    const { errors } = await altogic.auth.signUpWithEmail(
      email,
      password,
      name
    );

    if (errors) return setError(errors);

    history.push("/");
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div>{errors && JSON.stringify(errors)}</div>

        <label htmlFor="input-name">Name</label>
        <input id="input-name" type="text" ref={nameRef} />

        <label htmlFor="input-email">Email</label>
        <input id="input-email" type="email" ref={emailRef} />
        <label htmlFor="input-password">Password</label>

        <input id="input-password" type="password" ref={passwordRef} />

        <br />

        <button type="submit">Sign up</button>
      </form>

      <br />

      <p>
        Already have an account? <Link to="/login">Log In</Link>
      </p>
    </>
  );
}
