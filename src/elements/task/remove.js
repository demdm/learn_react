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
        taskRemovingStatus
    } = useSelector(state => state.taskManager);

    let isSpinnerShown = false;

    taskRemovingStatus.forEach(item => {
        if (item.id === taskId) {
            isSpinnerShown = item.isTaskRemoving;
            return true;
        }
    });

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