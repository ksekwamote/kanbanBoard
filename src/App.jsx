import { useEffect, useState } from "react";
import "./App.css";
import Column from "./assets/components/Column";
import KanbanBoard from "./assets/components/Kanbanboard";
import Task from "./assets/components/Task";

function App() {
  return (
    <div className="App">
      <KanbanBoard />
    </div>
  );
}

export default App;
