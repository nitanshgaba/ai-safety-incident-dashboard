# AI Safety Incident Dashboard

This is a React-based web application to manage and track AI safety incidents. You can add incidents, view details, filter and sort them, and toggle between light and dark modes. All data is stored for the current session.

## Features:
- **Add Incidents**: Title, description, severity, and reported date.
- **Filter**: View incidents based on severity.
- **Sort**: Sort incidents by date (newest/oldest).
- **View Details**: Expand incident cards to see full descriptions.
- **Session Persistence**: Data is stored during the session only.

## Tech Stack:
- **React** for the front-end.
- **CSS** for styling (light/dark mode).
- **sessionStorage** for session-based data persistence.

## Prerequisites:
Ensure you have the following installed on your local machine:
- **Node.js** (v14 or later)
- **npm** (comes with Node.js)

## Installation:

Follow these steps to set up the project locally:

1. **Clone the repository**:
    git clone https://github.com/nitanshgaba/ai-safety-incident-dashboard.git

2. **Navigate to the project folder**:
    cd ai-safety-incident-dashboard

3. **Install dependencies**:
    npm install

4. **Start the app**:
    npm run dev

   The app will be running on `http://localhost:5173`.

## How to Use:

1. **Add a New Incident**:
   - Fill in the form with the incident title, description, severity, and date.
   - Click the "Submit" button to add the incident.

2. **Filter Incidents**:
   - Use the filter buttons to show incidents based on their severity.

3. **Sort Incidents**:
   - Sort incidents by their date (newest or oldest).

4. **View Incident Details**:
   - Click "View Details" to see a detailed description of an incident.

## Design Decisions:

- **Session Persistence**:
  Data is stored in `sessionStorage`, so it’s cleared when the user closes the tab or browser.

- **State Management**:
  The app uses React’s `useState` hook for managing state (incidents, filters, theme).

- **Error Handling**:
  Basic error handling ensures that empty incident fields cannot be submitted.

## Challenges:

- **Session-Based Data**:
  Ensuring data only persists for the session (and is cleared when the tab is closed) was done using `sessionStorage`.

## Future Improvements:

- **Form Validation**: Add more complex checks like title length and character validation.
- **Styling Enhancements**: Implement animations or transitions for a smoother experience when switching themes or expanding incident details.
- **Cross-Session Persistence**: Use `localStorage` to persist data and theme preferences even after closing the browser.

---

**Happy Coding! 😊**
