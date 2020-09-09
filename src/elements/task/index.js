import React from 'react';
import { Checkbox } from '@fluentui/react';

export const Task = ({ taskId, isCompleted, label, changeCompletionCallback }) => {
    return (
        <Checkbox
            defaultChecked={isCompleted}
            onChange={(event, isChecked) => changeCompletionCallback(taskId, isChecked)}
        />
    );
};
