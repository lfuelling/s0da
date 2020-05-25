import React, { useEffect } from 'react';
import { Redirect } from 'react-router';
import { logout } from '../../helpers';

export const LogoutPage = () => {
  useEffect(() => {
    logout();
  }, []);

  return <Redirect to={'/'} />;
};
