// Types
import { types } from './types';

export const taskManagerActions = {
    // Sync
    fillTasks: tasks => ({
        type: types.TASK_MANAGER_FILL_TASKS,
        payload: tasks,
    }),
    creatingTask: isTaskCreating => ({
        type: types.TASK_MANAGER_CREATING_TASK,
        payload: isTaskCreating,
    }),
    removingTask: (id, isTaskRemoving) => ({
        type: types.TASK_MANAGER_REMOVING_TASK,
        payload: {
            id,
            isTaskRemoving,
        },
    }),
    completingTask: (id, isCompleted, isTaskCompleting) => ({
        type: types.TASK_MANAGER_COMPLETING_TASK,
        payload: {
            id,
            isCompleted,
            isTaskCompleting,
        },
    }),
    renderErrorApiResponseMessage: (responseStatusCode, isMessageRendered) => ({
        type: types.TASK_MANAGER_RENDER_ERROR_API_RESPONSE_MESSAGE,
        payload: {
            responseStatusCode,
            isMessageRendered,
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
