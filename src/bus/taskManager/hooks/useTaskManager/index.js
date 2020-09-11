// Core
import { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";

// API
import { taskManagerActions } from "../../actions";

export const useTaskManager = () => {
    const dispatch = useDispatch();
    const { tasks } = useSelector(state => state.taskManager);

    useEffect(() => {
        dispatch(taskManagerActions.fetchTasksAsync(tasks));
    }, [dispatch]);

    // const deleteTask = async id => {
    //     await api.tasks.remove(id);
    //     getFromApiAndSetTasks();
    // };

    // const createTask = async title => {
    //     await api.tasks.create(title);
    //     getFromApiAndSetTasks();
    // };

    // const changeTaskCompletion = async (id, isCompleted) => await api.tasks.changeCompletion(id, isCompleted);

    return {
        tasks,
        deleteTask: () => {},
        createTask: () => {},
        changeTaskCompletion: () => {},
    };
};
