import './App.css';
import AddTodo from "./Components/AddTask";
import Status from './Components/Status';
import TodoList from './Components/ListTask';
import { useState } from "react";

function App() {
  const [done, setDone] = useState(false);
  const [unDone, setUndone] = useState(false);
  return (
    <div className="App">
      <header className="App-header">
        <h1 style={{ color: "black", marginBottom: "100px" }}> Liste des Tâches  </h1>
        <AddTodo />
        <Status setDone={setDone} setUndone={setUndone} />
        <TodoList done={done} unDone={unDone} />

      </header>
    </div>
  );
}

export default App;