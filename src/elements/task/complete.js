import React from 'react';
import { Checkbox } from '@fluentui/react';

const Complete = ({ taskId, isCompleted, label, changeCompletionCallback }) => {
    return (
        <Checkbox
            defaultChecked={isCompleted}
            onChange={(event, isChecked) => changeCompletionCallback(taskId, isChecked)}
        />
    );
};

export default Complete;