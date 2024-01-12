import { useDispatch } from "react-redux";
import { deleteTask, toggleTask } from "../store/Slice/taskSlice.js";

function TaskItem({ task }) {

  const dispatch = useDispatch()

  const handleToggle = () => {
    dispatch(toggleTask(task.id))
  }

  const handleDelete = () => {
    dispatch(deleteTask(task.id))
  }

  return (
    <div>
      <span>{task.title}</span>
      {
        task.description && <div>{task.description}</div>
      }
      <input type={'checkbox'} onChange={handleToggle} checked={task.done} />
      <button onClick={handleDelete}>X</button>
    </div>
  );
}

export default TaskItem;