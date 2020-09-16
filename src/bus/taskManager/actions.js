// Types
import { types } from './types';

export const taskManagerActions = {
    // Sync
    fillTasks: tasks => ({
        type: types.TASK_MANAGER_FILL_TASKS,
        payload: tasks,
    }),
    creatingTask: isTaskCreating => ({
        type: types.TASK_MANAGER_START_CREATING_TASK,
        payload: isTaskCreating,
    }),
    removingTask: (id, isTaskRemoving) => ({
        type: types.TASK_MANAGER_START_REMOVING_TASK,
        payload:  {
            id,
            isTaskRemoving,
        },
    }),
    completingTask: (id, isCompleted, isTaskCompleting) => ({
        type: types.TASK_MANAGER_START_COMPLETING_TASK,
        payload: {
            id,
            isCompleted,
            isTaskCompleting,
        },
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
    completeTaskAsync: (id, isCompleted) => ({
        type: types.TASK_MANAGER_COMPLETE_TASK_ASYNC,
        payload: {
            id,
            isCompleted,
        },
    }),
}
