import { useState, useEffect } from "react";
import NewIncidentForm from './components/NewIncidentForm';
import FilterButtons from './components/FilterButtons';
import SortDropDown from './components/SortDropDown';
import IncidentList from './components/IncidentList';

function App() {
  const [incidents, setIncidents] = useState(() => {
    const storedIncidents = sessionStorage.getItem("incidents");
    return storedIncidents ? JSON.parse(storedIncidents) : [
      { id: 1, title: "Biased Recommendation Algorithm", description: "Algorithm consistently favored certain demographics...", severity: "Medium", reportedAt: "2025-03-15T10:00:00Z" },
      { id: 2, title: "LLM Hallucination in Critical Info", description: "LLM provided incorrect safety procedure information...", severity: "High", reportedAt: "2025-04-01T14:30:00Z" },
      { id: 3, title: "Minor Data Leak via Chatbot", description: "Chatbot inadvertently exposed non-sensitive user metadata...", severity: "Low", reportedAt: "2025-03-20T09:15:00Z" }
    ];
  });

  useEffect(() => {
    sessionStorage.setItem("incidents", JSON.stringify(incidents));
  }, [incidents]);

  const [filter, setFilter] = useState("All");
  const [sortOrder, setSortOrder] = useState("Newest");
  const [expandedId, setExpandedId] = useState(null);
  const [newTitle, setNewTitle] = useState("");
  const [newDescription, setNewDescription] = useState("");
  const [newSeverity, setNewSeverity] = useState("Low");

  const filteredIncidents = incidents.filter(incident =>
    filter === "All" ? true : incident.severity === filter
  );

  const sortedIncidents = [...filteredIncidents].sort((a, b) => {
    const dateA = new Date(a.reportedAt);
    const dateB = new Date(b.reportedAt);
    return sortOrder === "Newest" ? dateB - dateA : dateA - dateB;
  });

  const toggleExpand = (id) => {
    setExpandedId(prevId => (prevId === id ? null : id));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!newTitle.trim() || !newDescription.trim()) {
      alert("Please fill all fields!");
      return;
    }

    const newIncident = {
      id: incidents.length + 1,
      title: newTitle,
      description: newDescription,
      severity: newSeverity,
      reportedAt: new Date().toISOString(),
    };

    const updatedIncidents = [newIncident, ...incidents];
    setIncidents(updatedIncidents);
    sessionStorage.setItem("incidents", JSON.stringify(updatedIncidents));
    setNewTitle("");
    setNewDescription("");
    setNewSeverity("Low");
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>AI Safety Incident Dashboard</h1>

      <NewIncidentForm
        newTitle={newTitle}
        setNewTitle={setNewTitle}
        newDescription={newDescription}
        setNewDescription={setNewDescription}
        newSeverity={newSeverity}
        setNewSeverity={setNewSeverity}
        handleSubmit={handleSubmit}
      />

      <FilterButtons setFilter={setFilter} />
      <SortDropDown sortOrder={sortOrder} setSortOrder={setSortOrder} />

      <IncidentList 
        incidents={sortedIncidents} 
        toggleExpand={toggleExpand} 
        expandedId={expandedId} 
      />
    </div>
  );
}

export default App;