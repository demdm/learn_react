// Types
import { types } from './types';

const initialState = {
    tasks: [],
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
        case types.TASK_MANAGER_START_COMPLETING_TASK:
        case types.TASK_MANAGER_STOP_COMPLETING_TASK:
            return {
                ...state,
                taskCompletionStatus: action.payload,
            };
        case types.TASK_MANAGER_START_CREATING_TASK:
        case types.TASK_MANAGER_STOP_CREATING_TASK:
            return {
                ...state,
                isTaskCreating: action.payload,
            };
        case types.TASK_MANAGER_START_REMOVING_TASK:
        case types.TASK_MANAGER_STOP_REMOVING_TASK:
            return {
                ...state,
                taskRemovingStatus: action.payload,
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
