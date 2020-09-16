import React from 'react';
import { useSelector } from "react-redux";
import {
    IconButton,
    Spinner,
    SpinnerSize,
} from '@fluentui/react';
import './remove.css';

const Remove = ({ taskId, removeTaskCallback }) => {
    const {
        taskRemovingStatus: {
            id: removedTaskId,
            isTaskRemoving,
        }
    } = useSelector(state => state.taskManager);

    const isSpinnerShown = isTaskRemoving && removedTaskId === taskId;

    return (
        <>
            <IconButton
                disabled={isSpinnerShown}
                iconProps={{ iconName: 'Cancel' }}
                title={`Remove task ${taskId}`}
                ariaLabel="Cancel"
                onClick={() => removeTaskCallback(taskId)}
            />
            { isSpinnerShown &&
                <Spinner
                    className={'removeTaskSpinner'}
                    labelPosition="right"
                    size={SpinnerSize.medium}
                />
            }
        </>
    );
};

export default Remove;