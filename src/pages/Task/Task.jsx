import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { selectTaskById } from "../../store/selector/taskSelector.js";
import { updateTask } from "../../store/Slice/taskSlice.js";

import './Task.css'

function Task() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { id } = useParams();
  const task = useSelector(selectTaskById(parseInt(id)));

  useEffect(() => {
    if (!task) {
      navigate('/');
    }
  }, [task, navigate]);

  const handleBack = () => {
    navigate(-1);
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const data = new FormData(e.currentTarget);
    const taskData = Object.fromEntries(data.entries());
    const newTask = {
      ...task,
      ...taskData,
      done: taskData.done === 'on' ? true : false,
    }
    dispatch(updateTask(newTask));
    navigate('/');
  }

  // if (!task) {
  //   return (<p>
  //     Aucune tâche à afficher.
  //   </p>);
  // }

  return (
    <div className="task-page">
      <h2>Modifier une tâche</h2>
      <form
        className="task-edit-form"
        onSubmit={handleSubmit}
      >
        <label>
          <span>Titre de la tâche :</span>
          <input type="text" name="title" required defaultValue={task.title} /></label>
        <label>
          <span>Description de la tâche :</span>
          {
            task.description && <textarea name="description" defaultValue={task.description} />
          }
        </label>
        <label>
          <span>Priorité :</span>
          <select defaultValue={task.priority} name="priority" required>
            <option value="classic">Classique</option>
            <option value="important">Important</option>
            <option value="urgent">Urgent</option>
            <option value="very-urgent">Très urgent</option>
          </select>
        </label>
        <label>
          <span>Tâche terminée :</span>
          <input type={'checkbox'} defaultChecked={task.done} name="done" />
        </label>
        <button className="edit-task-btn" type="submit">Modifier</button>
        <button className="cancel-btn" type="button" onClick={handleBack}>Annuler</button>
      </form>
    </div>
  );
}

export default Task;