import React from 'react';
import PropTypes from 'prop-types';

export const TimelineIncident = (props) => {
  let incident = props.incident;
  return (
    <li className={'timeline-incident ' + incident.status}>
      <div className="timeline-incident__wrapper">
        <h4 className="incident-title">
          <abbr title={incident.date}>{incident.title}</abbr>
        </h4>
        <p className="incident-details">{incident.description}</p>
      </div>
    </li>
  );
};

TimelineIncident.propTypes = {
  incident: PropTypes.object.isRequired(),
};
