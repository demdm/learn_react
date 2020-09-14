// Core
import { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";

// API
import { taskManagerActions } from "../../actions";

export const useTaskManager = () => {
    const dispatch = useDispatch();
    const { tasks } = useSelector(state => state.taskManager);

    useEffect(
        () => {
            dispatch(taskManagerActions.fetchTasksAsync());
        },
        [
            dispatch,
        ]
    );

    return {
        tasks,
        removeTask: async id => dispatch(taskManagerActions.removeTaskAsync(id)),
        createTask: async title => dispatch(taskManagerActions.createTaskAsync(title)),
        changeTaskCompletion: async (id, isCompleted) => dispatch(taskManagerActions.completeTaskAsync(id, isCompleted)),
    };
};
