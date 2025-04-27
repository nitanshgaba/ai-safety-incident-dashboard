import React, { useState } from 'react';
import './NewIncidentForm.css';

const NewIncidentForm = ({
  newTitle,
  setNewTitle,
  newDescription,
  setNewDescription,
  newSeverity,
  setNewSeverity,
  handleSubmit,
}) => {
  const [focusedField, setFocusedField] = useState(null);
  const [errors, setErrors] = useState({
    title: '',
    description: '',
    severity: '',
  });

  const handleFocus = (field) => setFocusedField(field);
  const handleBlur = () => setFocusedField(null);

  const validateForm = () => {
    const newErrors = {
      title: newTitle.trim() === '' ? 'Title is required' : '',
      description: newDescription.trim() === '' ? 'Description is required' : '',
      severity: newSeverity.trim() === '' ? 'Severity is required' : '',
    };
    setErrors(newErrors);
    return Object.values(newErrors).every((error) => error === '');
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    handleSubmit(e);
  };

  return (
    <section className="new-incident-form">
      <h2>Report New Incident</h2>
      <form onSubmit={handleFormSubmit}>

        <div className={`form-group ${focusedField === 'title' ? 'focused' : ''}`}>
          <label htmlFor="title">Incident Title</label>
          <input
            id="title"
            type="text"
            placeholder="Enter incident title"
            value={newTitle}
            onChange={(e) => setNewTitle(e.target.value)}
            onFocus={() => handleFocus('title')}
            onBlur={handleBlur}
            required
          />
          {errors.title && <p className="error">{errors.title}</p>}
        </div>

        <div className={`form-group ${focusedField === 'description' ? 'focused' : ''}`}>
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            placeholder="Provide detailed description"
            value={newDescription}
            onChange={(e) => setNewDescription(e.target.value)}
            onFocus={() => handleFocus('description')}
            onBlur={handleBlur}
            required
          />
          {errors.description && <p className="error">{errors.description}</p>}
        </div>

        <div className={`form-group ${focusedField === 'severity' ? 'focused' : ''}`}>
          <label htmlFor="severity">Severity Level</label>
          <select
            id="severity"
            value={newSeverity}
            onChange={(e) => setNewSeverity(e.target.value)}
            onFocus={() => handleFocus('severity')}
            onBlur={handleBlur}
            required
          >
            <option value="Low">Low Priority</option>
            <option value="Medium">Medium Priority</option>
            <option value="High">High Priority</option>
          </select>
          {errors.severity && <p className="error">{errors.severity}</p>}
          <div className={`severity-indicator ${newSeverity.toLowerCase()}`} />
        </div>

        <button type="submit" className="submit-btn">
          <span>Submit Incident Report</span>
        </button>
      </form>
    </section>
  );
};

export default NewIncidentForm;

