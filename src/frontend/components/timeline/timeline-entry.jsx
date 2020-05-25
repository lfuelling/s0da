import React from 'react';
import PropTypes from 'prop-types';
import { TimelineIncident } from './timeline-incident';

export const TimelineEntry = ({ incidents, date }) => {
  return (
    <li className={'timeline-entry'}>
      <h3>{date}</h3>
      <ul className={'timeline-entry-incidents'}>
        {incidents.map((ic, idx) => (
          <TimelineIncident key={idx} incident={ic} />
        ))}
      </ul>
      {!incidents.length && (
        <p className="timeline-entry-incidents-empty">No incidents.</p>
      )}
    </li>
  );
};

TimelineEntry.propTypes = {
  incidents: PropTypes.array,
  date: PropTypes.date,
};
