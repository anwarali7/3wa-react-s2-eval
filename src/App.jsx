import TaskList from "./component/TaskList.jsx";
import TaskForm from "./component/TaskForm.jsx";
import { Routes, Route } from "react-router-dom";
import NavBar from "./component/NavBar/NavBar.jsx";

import './App.css'

function App() {

  return (
    <>
      <NavBar />
      <h1>Todo list</h1>
      <Routes>
        <Route path="/" element={<>
          <h2>Ajouter une tâche</h2>
          <TaskForm />
          <br /><br />
          <h2>Liste des tâches</h2>
          <TaskList />
        </>} />
        <Route path="/task:id" element={<h2>Task</h2>} />
      </Routes>
    </>
  )
}

export default App