import React from 'react';
import {
    IconButton,
    Spinner,
    SpinnerSize,
} from '@fluentui/react';
import './remove.css';

const Remove = ({
    taskId,
    removeTaskCallback,
    taskRemovingStatus = null,
}) => {
    const isSpinnerShown = null !== taskRemovingStatus && taskRemovingStatus.isTaskRemoving;

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