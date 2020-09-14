// Core
import React from 'react';

// Elements
import Complete from '../../../../elements/task/complete';
import Add from '../../../../elements/task/add';
import Remove from '../../../../elements/task/remove';
import { useTaskManager } from '../../hooks/useTaskManager';

// UI
import {
    Fabric,
} from '@fluentui/react';

export const List = () => {
    let {
        tasks,
        deleteTask,
        createTask,
        changeTaskCompletion,
    } = useTaskManager();

    return (
        <>
            <Fabric
                style={{ width: 'max-content'}}
            >
                <Add
                    addTaskCallback={createTask}
                />

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
                                <td style={{ minWidth: 70 }}>
                                    {id}
                                </td>
                                <td style={{ minWidth: 200 }}>
                                    {title}
                                </td>
                                <td style={{ minWidth: 100 }}>
                                    <Complete
                                        taskId={id}
                                        label={title}
                                        isCompleted={isCompleted}
                                        changeCompletionCallback={changeTaskCompletion}
                                    />
                                </td>
                                <td style={{ minWidth: 100 }}>
                                    <Remove
                                        taskId={id}
                                        removeTaskCallback={deleteTask}
                                    />
                                </td>
                            </tr>
                        )) }
                    </tbody>
                </table>
            </Fabric>
        </>
    )
};