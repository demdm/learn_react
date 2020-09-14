// Types
import { types } from './types';

export const taskManagerActions = {
    // Sync
    fillTasks: tasks => ({
        type: types.TASK_MANAGER_FILL_TASKS,
        payload: tasks,
    }),

    // Async
    fetchTasksAsync: () => ({
        type: types.TASK_MANAGER_FETCH_TASKS_ASYNC,
    }),
    removeTaskAsync: id => ({
        type: types.TASK_MANAGER_REMOVE_TASK_ASYNC,
        payload: id,
    }),
    createTaskAsync: title => ({
        type: types.TASK_MANAGER_CREATE_TASK_ASYNC,
        payload: title,
    }),
    completeTaskAsync: (id, title) => ({
        type: types.TASK_MANAGER_COMPLETE_TASK_ASYNC,
        payload: { id, title },
    }),
}
