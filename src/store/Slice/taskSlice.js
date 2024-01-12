import { createSlice } from "@reduxjs/toolkit";

let id = 0

const taskSlice = createSlice({
  name: 'task',
  initialState: {
    tasks: [],
    task: {
      title: '',
      description: '',
      priority: ''
    },
    message: ''
  },
  reducers: {
    changeTask(state, action) {
      state.task[action.payload.name] = action.payload.value
      state.message = ''
    },
    addTask(state) {
      if (state.task.title !== '') {
        state.tasks.push({ ...state.task, id: id++, done: false })
        state.task = { title: "", description: '' }
      } else {
        state.message = "merci de saisir au minimum un titre"
      }
    },
    toggleTask(state, action) {
      state.tasks = state.tasks.map(task => {
        if (task.id === action.payload) {
          task.done = !task.done
        }
        return task
      })
    },
    deleteTask(state, action) {
      state.tasks = state.tasks.filter(task => task.id !== action.payload)
    }
  }
})

export const {
  changeTask,
  addTask,
  toggleTask,
  deleteTask
} = taskSlice.actions;

export default taskSlice.reducer;