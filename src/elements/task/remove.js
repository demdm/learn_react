// Core
import React from 'react';

// UI
import {
    IconButton,
} from '@fluentui/react';

import {api} from "../../bus/taskManager/api";


const Remove = ({taskId}) => {
    const removeTask = async () => {
        await api.tasks.remove(taskId);
    };
    
    return (
        <>
            <IconButton
                iconProps={{ iconName: 'Cancel' }}
                title={`Remove task ${taskId}`}
                ariaLabel="Cancel"
                onClick={removeTask}
            />
        </>
    )
};

export default Remove;