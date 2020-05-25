import React, { useContext, useEffect, useState } from 'react';
import { SettingsContext } from '../../SettingsContext';
import Loader from 'react-loader-spinner';

export const AdminSettings = () => {
  const [state, setState] = useState({
    timespan: '',
    title: '',
    subtitle: '',
    showGraph: true,
    error: false,
  });

  const settings = useContext(SettingsContext);

  useEffect(() => {
    if (!settings) return;
    setState((prevState) => ({
      ...prevState,
      ...settings,
    }));
  }, [settings]);

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

  function formSubmit(e) {
    e.preventDefault();
    fetch('/api/settings', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        timespan: state.timespan,
        title: state.title,
        subtitle: state.subtitle,
        showGraph: state.showGraph,
      }),
    }).then((res) => setError(!res.ok));
  }

  if (!settings)
    return (
      <Loader
        className={'loader'}
        type="Puff"
        color="#000"
        height={64}
        width={64}
      />
    );

  return (
    <form id={'settings-form'} onSubmit={formSubmit}>
      <label htmlFor="timespan">Timespan (days)</label>
      <input
        type="text"
        id="timespan"
        placeholder="10"
        value={state.timespan}
        onChange={handleChange}
      />
      <label htmlFor="title">Site Title</label>
      <input
        type="text"
        id="title"
        placeholder="S0da"
        value={state.title}
        onChange={handleChange}
      />
      <label htmlFor="subtitle">Site Subtitle</label>
      <input
        type="text"
        id="subtitle"
        placeholder="a refreshing incident board"
        value={state.subtitle}
        onChange={handleChange}
      />
      <button type="submit" className={'btn'}>
        Save
      </button>
      {state.error && (
        <span className={'feedback'}>Error saving settings!</span>
      )}
    </form>
  );
};
