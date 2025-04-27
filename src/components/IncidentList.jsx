import React from 'react';
import IncidentCard from './IncidentCard';
import './IncidentList.css';

const IncidentList = ({ incidents, toggleExpand, expandedId }) => {
  const hasIncidents = incidents.length > 0;
  const incidentCountText = `${incidents.length} ${incidents.length === 1 ? 'Incident' : 'Incidents'}`;

  return (
    <div className="incident-list">
      <header className="incident-list-header">
        <h2 className="incident-list-title">Incident Dashboard</h2>
        <div className="incident-list-count">{incidentCountText}</div>
      </header>

      {hasIncidents ? (
        incidents.map((incident, index) => (
          <IncidentCard
            key={incident.id}
            incident={incident}
            toggleExpand={toggleExpand}
            expandedId={expandedId}
            style={{ transitionDelay: `${index * 0.05}s` }}
          />
        ))
      ) : (
        <div className="incident-list-empty">
          <div className="incident-list-empty-icon" role="img" aria-label="shield">
            🛡️
          </div>
          <p className="incident-list-empty-text">
            No incidents reported. Everything is operating smoothly.
          </p>
        </div>
      )}
    </div>
  );
};

export default IncidentList;
