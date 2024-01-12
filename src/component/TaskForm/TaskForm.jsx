import { useSelector, useDispatch } from "react-redux";
import { selectTask, selectTaskMessage } from "../../store/selector/taskSelector.js";
import { addTask, changeTask } from "../../store/Slice/taskSlice.js";
import './TaskForm.css'

function TaskForm() {

  const dispatch = useDispatch()
  const task = useSelector(selectTask)
  const message = useSelector(selectTaskMessage)

  const handleChange = (e) => {
    const { name, value } = e.target
    dispatch(changeTask({ name, value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(addTask())
  }

  return (
    <>
      <h2>Ajouter une tâche</h2>
      <form
        onSubmit={handleSubmit}
        style={{
          display: "flex",
          flexDirection: "column"
        }}
        className="task-form"
      >
        {
          message !== '' && <span style={{ color: "red" }}>{message}</span>
        }
        <input onChange={handleChange} type="text" name="title" value={task.title} placeholder="Titre de la tâche" className="task-form__task-title-input" />
        <textarea onChange={handleChange} type='text' name="description" value={task.description} className="task-form__task-textarea" placeholder="Description de la tâche" />
        <select onChange={handleChange} name="priority" value={task.priority} required>
          <option value="" disabled>--Priorité--</option>
          <option value="classic">Classique</option>
          <option value="important">Important</option>
          <option value="urgent">Urgent</option>
          <option value="very-urgent">Très urgent</option>
        </select>
        <button className="task-form__submit-button">Ajouter</button>
      </form>
    </>
  );
}

export default TaskForm;