export const selectTask = (state) => state.task.task;

export const selectTasks = (state) => state.task.tasks;

export const selectTaskMessage = (state) => state.task.message;

export const selectTaskById = (id) => (state) => state.task.tasks.find(task => task.id === id);