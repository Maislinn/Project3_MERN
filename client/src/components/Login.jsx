import React, { useState } from "react";

import { useMutation } from "@apollo/client";
import { LOGIN_USER } from "../utils/mutations";

import Auth from "../utils/auth";

const Login = (props) => {
  const [formState, setFormState] = useState({ email: "", password: "" });
  const [login, { error, data }] = useMutation(LOGIN_USER);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(formState);
    try {
      const { data } = await login({
        variables: { ...formState },
      });

      Auth.login(data.login.token);
    } catch (e) {
      console.error(e);
    }

    // clear form values
    setFormState({
      email: "",
      password: "",
    });
  };

  return (
    <div className="auth-form-container pt-10">
      <h2 className="text-center text-3xl">Log In</h2>
      <div>
        {data ? (
          <p>Success!</p>
        ) : (
          <form onSubmit={handleSubmit} className="m-5 grid place-items-center">
            <div className="mb-3 w-1/2">
              <label htmlFor="email">email</label>
              <input
                value={formState.email}
                onChange={handleChange}
                type="email"
                placeholder="youremail@email.com"
                id="email"
                className="px-3 py-3 placeholder-gray-400 text-gray-600 relative bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus: ring w-full"
                name="email"
              ></input>
            </div>
            <div className="mb-3 w-1/2">
              <label htmlFor="password">password</label>
              <input
                value={formState.password}
                onChange={handleChange}
                type="password"
                placeholder="********"
                id="password"
                className="px-3 py-3 placeholder-gray-400 text-gray-600 relative bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus: ring w-full"
                name="password"
              ></input>
            </div>
            <button
              className="[background-color:#f5bcb1] [color:#9c9897] active:bg-neutral-700 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
              type="submit"
            >
              Log In
            </button>
          </form>
        )}
        {error && <div className="m-5 grid place-items-center">{error.message}</div>}
      </div>
      <div className="m-5 grid place-items-center">
      <button
        onClick={() => props.onFormSwitch("signup")}
        className="[background-color:#979293] [color:#f5bcb1] active:bg-neutral-700 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
      >
        Don't have an account? Register here.
      </button>
      </div>
    </div>
  );
};

export default Login;
