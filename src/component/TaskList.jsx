import { useSelector } from "react-redux";
import { selectTasks } from "../store/selector/taskSelector.js";
import TaskItem from "./TaskItem.jsx";

function TaskList() {

  const tasks = useSelector(selectTasks)

  return (
    <div>
      {
        tasks.length > 0 ?
          tasks.map((task) => <TaskItem task={task} key={`task-${task.id}`} />)
          :
          <span>Aucune tache à afficher</span>
      }
    </div>
  );
}

export default TaskList;