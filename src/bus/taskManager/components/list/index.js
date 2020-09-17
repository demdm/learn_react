// Core
import React from 'react';
import { useSelector } from "react-redux";

// Elements
import Complete from '../../../../elements/task/complete';
import Add from '../../../../elements/task/add';
import Remove from '../../../../elements/task/remove';
import { useTaskManager } from '../../hooks/useTaskManager';
import Message from "../message";

// UI
import { Fabric } from '@fluentui/react';

export const List = () => {
    let {
        tasks,
        removeTask,
        createTask,
        changeTaskCompletion,
    } = useTaskManager();

    const {
        tasksRemovingStatus,
        tasksCompletingStatus,
        isTaskCreating,
    } = useSelector(state => state.taskManager);

    return (
        <>
            <Fabric
                style={{ width: 'max-content'}}
            >
                <Message/>

                <Add
                    addTaskCallback={createTask}
                    isTaskCreating={isTaskCreating}
                />

                { tasks.length > 0 &&
                    <table>
                        <thead>
                            <tr style={{ fontWeight: 600 }}>
                                <td>ID</td>
                                <td>Description</td>
                                <td>Complete</td>
                                <td>Remove</td>
                            </tr>
                        </thead>
                        <tbody>
                            { tasks.map((
                                {
                                    id,
                                    title,
                                    isCompleted
                                }
                            ) => (
                                <tr key={id}>
                                    <td style={{ width: 70 }}>
                                        {id}
                                    </td>
                                    <td style={{ width: 240 }}>
                                        {title}
                                    </td>
                                    <td style={{ width: 140 }}>
                                        <Complete
                                            taskId={id}
                                            isCompleted={isCompleted}
                                            changeCompletionCallback={changeTaskCompletion}
                                            taskCompletingStatus={ tasksCompletingStatus[id] || null }
                                        />
                                    </td>
                                    <td style={{ minWidth: 140 }}>
                                        <Remove
                                            taskId={id}
                                            removeTaskCallback={removeTask}
                                            taskRemovingStatus={ tasksRemovingStatus[id] || null }
                                        />
                                    </td>
                                </tr>
                            )) }
                        </tbody>
                    </table>
                }
            </Fabric>
        </>
    )
};