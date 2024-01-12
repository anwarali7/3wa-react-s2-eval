import { useSelector, useDispatch } from "react-redux";
import {
  // selectTasks,
  selectFilteredTasks
} from "../../store/selector/taskSelector.js";
import { setFilters } from "../../store/Slice/taskSlice.js";
import TaskItem from "../TaskItem/TaskItem.jsx";
import './TaskList.css'

function TaskList() {

  const dispatch = useDispatch()
  // const tasks = useSelector(selectTasks)
  const tasks = useSelector(selectFilteredTasks);


  const handleChange = (e) => {
    const { name, value } = e.target
    dispatch(setFilters({ name, value }))
  }

  return (
    <div className="task-list-container">
      <h2>Liste des tâches</h2>
      <div className="filters-container">
        Filtrer les tâches : <br />
        <label>
          <input onChange={handleChange} type="radio" name="showDone" value="both" defaultChecked />
          <span>Afficher toutes les tâches</span>
        </label>
        <label>
          <input onChange={handleChange} type="radio" name="showDone" value="done" />
          <span>Afficher les tâches terminées</span>
        </label>
        <label>
          <input onChange={handleChange} type="radio" name="showDone" value="inprogress" />
          <span>Afficher les tâches en cours</span>
        </label>
        <label>
          Afficher les tâches par priorité :
          <select onChange={handleChange} name="showPriority" defaultValue="">
            <option value="all">Toutes</option>
            <option value="classic">Classique</option>
            <option value="important">Important</option>
            <option value="urgent">Urgent</option>
            <option value="very-urgent">Très urgent</option>
          </select>
        </label>
      </div>
      <div className="task-list" >
        {
          tasks.length > 0 ?
            tasks.map((task) => <TaskItem task={task} key={`task-${task.id}`} />)
            :
            <span>Aucune tache à afficher</span>
        }
      </div>
    </div>
  );
}

export default TaskList;