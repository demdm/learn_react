import React from 'react';
import { IconButton } from '@fluentui/react';

const Remove = ({ taskId, removeTaskCallback }) => {
    return (
        <IconButton
            iconProps={{ iconName: 'Cancel' }}
            title={`Remove task ${taskId}`}
            ariaLabel="Cancel"
            onClick={() => removeTaskCallback(taskId)}
        />
    );
};

export default Remove;