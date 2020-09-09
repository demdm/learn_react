// Core
import React from 'react';

// UI
import { Checkbox } from '@fluentui/react';

import { api } from "../../bus/taskManager/api";

export const Task = ({ taskId, isCompleted, label }) => {
    const onChange = (event, isChecked) => {
        return api.tasks.changeCompletion(taskId, isChecked);
    };

    return (
        <>
            <Checkbox
                defaultChecked={isCompleted}
                onChange={onChange}
            />
        </>
    );
};