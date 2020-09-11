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
};
