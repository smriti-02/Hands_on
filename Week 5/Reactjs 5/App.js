import React from "react";
import CohortDetails from "./Components/CohortDetails";

function App() {
  return (
    <div>
      <CohortDetails
        title="React Training"
        status="ongoing"
        coach="John"
        trainer="David"
        startDate="01/07/2026"
      />

      <CohortDetails
        title="Java Training"
        status="completed"
        coach="Smith"
        trainer="Alex"
        startDate="15/05/2026"
      />
    </div>
  );
}

export default App;