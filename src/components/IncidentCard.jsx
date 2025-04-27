import React from 'react';
import './IncidentCard.css';

const IncidentCard = ({ incident, toggleExpand, expandedId }) => {
  const { id, title, severity, reportedAt, description } = incident;
  const isExpanded = expandedId === id;
  const formattedDate = new Date(reportedAt).toLocaleString();
  const severityClass = `severity-${severity.toLowerCase()}`;

  return (
    <div className="incident-card" data-severity={severity}>
      <h3>{title}</h3>

      <p>
        <strong>Severity:</strong>{' '}
        <span className={severityClass}>{severity}</span>
      </p>

      <p>
        <strong>Reported At:</strong> {formattedDate}
      </p>

      <button onClick={() => toggleExpand(id)}>
        {isExpanded ? 'Hide Details ↓' : 'View Details →'}
      </button>

      {isExpanded && (
        <div className="details">
          <p>
            <strong>Description:</strong> {description}
          </p>
        </div>
      )}
    </div>
  );
};

export default IncidentCard;
