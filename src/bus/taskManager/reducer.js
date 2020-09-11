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
        default:
            return state;
    }
};
