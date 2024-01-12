import { useSelector } from "react-redux";
import { selectTasks } from "../store/selector/taskSelector.js";
import TaskItem from "./TaskItem/TaskItem.jsx";

function TaskList() {

  const tasks = useSelector(selectTasks)

  return (
    <div className="task-list" style={{
      display: "flex",
      flexDirection: "column",
      rowGap: "15px"
    }}>
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