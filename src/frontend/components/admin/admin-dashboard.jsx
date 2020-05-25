import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AdminSettings } from './admin-settings';
import { SettingsContext } from '../../SettingsContext';
import Loader from 'react-loader-spinner';

export const AdminDashboard = () => {
  const settings = useContext(SettingsContext);

  if (!settings?.timespan)
    return (
      <Loader
        className={'loader'}
        type="Puff"
        color="#000"
        height={64}
        width={64}
      />
    );

  console.log(settings);

  return (
    <div>
      <h1 className={'app-title'} aria-label={'Soda Admin'}>
        {settings?.title} - Admin
      </h1>
      <p className={'app-subtitle'}>A refreshing admin interface...</p>
      <div className="nav">
        <Link className={'btn btn-logout'} to={'/logout'}>
          Log out
        </Link>
      </div>
      <AdminSettings />
    </div>
  );
};
