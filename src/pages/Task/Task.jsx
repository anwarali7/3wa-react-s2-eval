import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { selectTaskById } from "../../store/selector/taskSelector.js";
import { updateTask } from "../../store/Slice/taskSlice.js";


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
    console.log(task, newTask);
    dispatch(updateTask(newTask));
    navigate('/');
  }

  if (!task) {
    return (<p>
      Aucune tâche à afficher.
    </p>);
  }

  return (
    <form
      className="task-edit-form"
      onSubmit={handleSubmit}
    >
      <label>Titre de la tâche :
        <input type="text" name="title" required defaultValue={task.title} /></label>
      <label>
        Description de la tâche :
        {
          task.description && <textarea name="description" defaultValue={task.description} />
        }
      </label>
      <label>
        Priorité :
        <select defaultValue={task.priority} name="priority" required>
          <option value="classic">Classique</option>
          <option value="important">Important</option>
          <option value="urgent">Urgent</option>
          <option value="very-urgent">Très urgent</option>
        </select>
      </label>
      <label>
        Tâche terminée :
        <input type={'checkbox'} defaultChecked={task.done} name="done" />
      </label>
      <button type="button" onClick={handleBack}>Annuler</button>
      <button type="submit">Modifier</button>
    </form>
  );
}

export default Task;