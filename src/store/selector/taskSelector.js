export const selectTask = (state) => state.task.task;

export const selectTasks = (state) => state.task.tasks;

export const selectTaskMessage = (state) => state.task.message;

export const selectTaskById = (id) => (state) => state.task.tasks.find(task => task.id === id);


/*
Selector selectFilteredTasks returned a different result when called with the same parameters. This can lead to unnecessary rerenders.
Selectors that return a new reference (such as an object or an array) should be memoized: https://redux.js.org/usage/deriving-data-selectors#optimizing-selectors-with-memoization 
*/
export const selectFilteredTasks = (state) => {
  let tasks = [...state.task.tasks];
  const filters = state.task.filters;

  if (filters.showDone !== 'both') {
    tasks = tasks.filter(task => task.done === (filters.showDone === 'done'))
  }
  if (filters.showPriority !== 'all') {
    tasks = tasks.filter(task => task.priority === filters.showPriority)
  }
  return tasks;
}