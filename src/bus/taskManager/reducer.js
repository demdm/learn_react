// Types
import { types } from './types';

const initialState = {
    tasks: [],
    tasksCompletingStatus: [],
    tasksRemovingStatus: [],
    isTaskCreating: false,
};

export const taskManagerReducer = (
    state = initialState,
    action
) => {
    switch (action.type) {
        case types.TASK_MANAGER_FILL_TASKS:
            return {
                ...state,
                tasks: action.payload
            };
        case types.TASK_MANAGER_COMPLETING_TASK:
            let tasksCompletingStatus = state.tasksCompletingStatus;
            tasksCompletingStatus[action.payload.id] = action.payload;

            return {
                ...state,
                tasksCompletingStatus,
            };
        case types.TASK_MANAGER_CREATING_TASK:
            return {
                ...state,
                isTaskCreating: action.payload,
            };
        case types.TASK_MANAGER_REMOVING_TASK:
            let tasksRemovingStatus = state.tasksRemovingStatus;
            tasksRemovingStatus[action.payload.id] = action.payload;

            return {
                ...state,
                tasksRemovingStatus,
            };
        case types.TASK_MANAGER_RENDER_ERROR_API_RESPONSE_MESSAGE:
            return {
                ...state,
                errorApiResponse: action.payload,
            };
        default:
            return state;
    }
};
