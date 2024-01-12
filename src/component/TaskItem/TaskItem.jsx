import { useDispatch } from "react-redux";
import { deleteTask, toggleTask } from "../../store/Slice/taskSlice.js";
import { Link } from "react-router-dom";

import PropTypes from "prop-types";

import './TaskItem.css';

function TaskItem({ task }) {

  const dispatch = useDispatch()

  const handleToggle = () => {
    dispatch(toggleTask(task.id))
  }

  const handleDelete = () => {
    dispatch(deleteTask(task.id))
  }

  const priority = () => {
    switch (task.priority) {
      case 'classic':
        return 'Classique'
      case 'important':
        return 'Important'
      case 'urgent':
        return 'Urgent'
      case 'very-urgent':
        return 'Très urgent'
      default:
        return 'Non défini'
    }
  }

  return (
    <div className="task-item">
      <input type={'checkbox'} onChange={handleToggle} checked={task.done} className="task-item__done-checkbox"/>
      <Link to={'/task/' + task.id} style={{ color: 'black' }}>
        <div className="task-item__task-title">{task.title}</div>
        {task.description && <div className="task-item__task-description">{task.description}</div>}
        <div className="task-item__task-priority">{priority()}</div>
      </Link>
      <button className="task-item__delete-task" onClick={handleDelete}>X</button>
    </div>
  );
}

TaskItem.propTypes = {
  task: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string,
    priority: PropTypes.string.isRequired,
    done: PropTypes.bool.isRequired,
  }).isRequired
}

export default TaskItem;