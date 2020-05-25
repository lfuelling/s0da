import React, { useState } from 'react';
import { Redirect } from 'react-router';
import { login } from '../../helpers';

export const LoginForm = () => {
  const [state, setState] = useState({
    username: '',
    password: '',
    error: false,
    shouldRedirect: false,
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setState((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };

  function setError(error) {
    setState((prevState) => ({
      ...prevState,
      error: error,
    }));
  }

  function setShouldRedirect(redirect) {
    setState((prevState) => ({
      ...prevState,
      shouldRedirect: redirect,
    }));
  }

  function formSubmit(e) {
    e.preventDefault();
    login(state.username, state.password)
      .then(() => {
        setError(false);
        setShouldRedirect(true);
      })
      .catch((e) => {
        console.log(e);
        setError(true);
      });
  }

  return (
    (state.shouldRedirect && <Redirect to={'/admin'} />) || (
      <form id={'login-form'} onSubmit={formSubmit}>
        <label htmlFor="username">Username</label>
        <input
          type="text"
          id="username"
          placeholder="Username"
          value={state.username}
          onChange={handleChange}
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          placeholder="Password"
          value={state.password}
          onChange={handleChange}
        />
        <button type="submit">Login</button>
        {state.error && <span className={'feedback'}>Error logging in!</span>}
      </form>
    )
  );
};
