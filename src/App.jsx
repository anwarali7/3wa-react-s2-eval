import TaskList from "./component/TaskList/TaskList.jsx";
import TaskForm from "./component/TaskForm/TaskForm.jsx";
import Task from "./pages/Task/Task.jsx";
import { Routes, Route } from "react-router-dom";
import NavBar from "./component/NavBar/NavBar.jsx";

import './App.css'

function App() {

  return (
    <>
      <NavBar />
      <h1 style={{fontSize: "2rem"}}>Todo list</h1>
      <Routes>
        <Route path="/" element={<>
          <TaskForm />
          <TaskList />
        </>} />
        <Route path="/task/:id" element={<Task />} />
      </Routes>
    </>
  )
}

export default App