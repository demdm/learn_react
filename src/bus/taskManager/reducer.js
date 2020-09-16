// Types
import { types } from './types';

const initialState = {
    tasks: [],
    taskCompletionStatus: [],
    taskRemovingStatus: [],
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
            let taskCompletionStatus = state.taskCompletionStatus;
            taskCompletionStatus[action.payload.id] = action.payload;

            return {
                ...state,
                taskCompletionStatus,
            };
        case types.TASK_MANAGER_CREATING_TASK:
            return {
                ...state,
                isTaskCreating: action.payload,
            };
        case types.TASK_MANAGER_REMOVING_TASK:
            let taskRemovingStatus = state.taskRemovingStatus;
            taskRemovingStatus[action.payload.id] = action.payload;

            return {
                ...state,
                taskRemovingStatus,
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
