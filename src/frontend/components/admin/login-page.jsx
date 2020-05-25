import React from 'react';
import { LoginForm } from './login-form';

export const LoginPage = () => {
  return (
    <div>
      <h1 className={'app-title'} aria-label={'Soda Admin'}>
        S🥤da - Admin
      </h1>
      <p className={'app-subtitle'}>A refreshing login form...</p>
      <LoginForm />
    </div>
  );
};
