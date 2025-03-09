import React from "react";
import BuggyCounter from "./components/BuggyCounter";
import ErrorBoundary from "./components/ErrorBoundary";

function App() {
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>React Error Boundary Example</h1>

      <h2>Simulation 1: Two BuggyCounters inside One ErrorBoundary</h2>
      <ErrorBoundary>
        <BuggyCounter />
        <BuggyCounter />
      </ErrorBoundary>

      <hr />

      
      <h2>Simulation 2: Each BuggyCounter inside its Own ErrorBoundary</h2>
      <ErrorBoundary>
        <BuggyCounter />
      </ErrorBoundary>
      <ErrorBoundary>
        <BuggyCounter />
      </ErrorBoundary>

      <hr />


      <h2>Simulation 3: One BuggyCounter without ErrorBoundary</h2>
      <BuggyCounter />
    </div>
  );
}

export default App;