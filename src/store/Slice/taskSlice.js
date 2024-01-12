import { createSlice } from "@reduxjs/toolkit";

let id = 0

const initialTasks = [
  {
    id: id++,
    title: "Acheter du pain",
    description: "Acheter du pain à la boulangerie",
    priority: "classic",
    done: false
  },
  {
    id: id++,
    title: "Acheter du lait",
    description: "Acheter du lait",
    priority: "important",
    done: true
  },
  {
    id: id++,
    title: "Acheter du beurre",
    description: "Acheter du beurre",
    priority: "urgent",
    done: true
  },
  {
    id: id++,
    title: "Acheter du fromage",
    description: "Acheter du fromage",
    priority: "very-urgent",
    done: false
  },
  {
    id: id++,
    title: "Acheter du sucre",
    description: "Acheter du sucre",
    priority: "very-urgent",
    done: true
  }
]

const taskSlice = createSlice({
  name: 'task',
  initialState: {
    tasks: initialTasks,
    task: {
      title: '',
      description: '',
      priority: ''
    },
    message: '',
    filters: {
      showDone: 'both',
      showPriority: 'all'
    }
  },
  reducers: {
    changeTask(state, action) {
      state.task[action.payload.name] = action.payload.value
      state.message = ''
    },
    addTask(state) {
      if (state.task.title !== '') {
        state.tasks.push({ ...state.task, id: id++, done: false })
        state.task = { title: "", description: '', priority: '' }
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
    },
    updateTask(state, action) {
      state.tasks = state.tasks.map(task => {
        console.log(task.id, action.payload.id);
        if (task.id === action.payload.id) {
          task = { ...task, ...action.payload }
        }
        return task;
      })
    },
    setFilters(state, action) {
      state.filters[action.payload.name] = action.payload.value
    }
  }
})

export const {
  changeTask,
  addTask,
  toggleTask,
  deleteTask,
  updateTask,
  setFilters
} = taskSlice.actions;

export default taskSlice.reducer;