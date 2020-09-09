// Core
import { useEffect, useState } from 'react';

// API
import { api } from '../../api';

export const useTaskManager = () => {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        getFromApiAndSetTasks();
    }, []);

    const getFromApiAndSetTasks = async () => {
        const tasks = await api.tasks.getAll();
        setTasks(tasks);
    };

    const deleteTask = async id => {
        await api.tasks.remove(id);
        getFromApiAndSetTasks();
    };

    const createTask = async title => {
        await api.tasks.create(title);
        getFromApiAndSetTasks();
    };

    const changeTaskCompletion = async (id, isCompleted) => await api.tasks.changeCompletion(id, isCompleted);

    return {
        tasks,
        deleteTask,
        createTask,
        changeTaskCompletion,
    };
};
