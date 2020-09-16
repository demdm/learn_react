import React from 'react';
import { useSelector } from "react-redux";
import {
    IconButton,
    Spinner,
    SpinnerSize,
} from '@fluentui/react';

const Remove = ({ taskId, removeTaskCallback }) => {
    const {
        taskRemovingStatus: {
            id: removedTaskId = null,
            isTaskRemoving: isSpinnerShown = false,
        } = {
            removedTaskId: null,
            isSpinnerShown: false,
        }
    } = useSelector(state => state.taskManager);

    return isSpinnerShown && removedTaskId === taskId
        ? <Spinner
            labelPosition="right"
            label='Removing...'
            size={SpinnerSize.medium}
        />
        : <IconButton
            iconProps={{ iconName: 'Cancel' }}
            title={`Remove task ${taskId}`}
            ariaLabel="Cancel"
            onClick={() => removeTaskCallback(taskId)}
        />
    ;
};

export default Remove;