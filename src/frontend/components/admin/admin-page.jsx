import React, { useEffect, useState } from 'react';
import { Redirect } from 'react-router';
import { AdminDashboard } from './admin-dashboard';
import Loader from 'react-loader-spinner';

export const AdminPage = () => {
  const [state, setState] = useState({
    hasLoaded: false,
    hasAccess: false,
  });

  useEffect(() => {
    fetch('/api/admin', { credentials: 'include' })
      .then((res) => {
        setState({
          hasLoaded: true,
          hasAccess: res.ok,
        });
      })
      .catch((err) => {
        setState({
          hasLoaded: true,
          hasAccess: err.response && err.response.ok,
        });
      });
  }, []);

  return (
    (!state.hasLoaded && (
      <Loader
        className={'loader'}
        type="Puff"
        color="#000"
        height={64}
        width={64}
      />
    )) ||
    (state.hasLoaded && state.hasAccess && <AdminDashboard />) ||
    (state.hasLoaded && !state.hasAccess && <Redirect to={'/login'} />)
  );
};
