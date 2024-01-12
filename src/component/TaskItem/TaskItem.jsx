import { useDispatch } from "react-redux";
import { deleteTask, toggleTask } from "../../store/Slice/taskSlice.js";
import { Link } from "react-router-dom";

function TaskItem({ task }) {

  const dispatch = useDispatch()

  const handleToggle = () => {
    dispatch(toggleTask(task.id))
  }

  const handleDelete = () => {
    dispatch(deleteTask(task.id))
  }

  return (
    <div className="task-item" style={{
      display: "flex",
      minWidth: "250px",
      justifyContent: "space-between",
      backgroundColor: "#ddd",
      borderRadius: "8px",
    }}>
      <input type={'checkbox'} onChange={handleToggle} checked={task.done} />
      <Link to={'/task/' + task.id} style={{color: 'black'}}>
        <span>{task.title}</span>
        <br />
        {task.description && <div>{task.description}</div>}
        <span>{task.priority}</span>
      </Link>
      <button onClick={handleDelete}>X</button>
    </div>
  );
}

export default TaskItem;