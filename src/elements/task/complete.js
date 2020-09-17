import React from 'react';
import {
    Checkbox,
    Spinner,
    SpinnerSize,
} from '@fluentui/react';
import './complete.css';

const Complete = ({
    taskId,
    isCompleted,
    changeCompletionCallback,
    taskCompletingStatus = null,
}) => {
    let isSpinnerShown = false,
        isCheckboxDisabled = false,
        isCheckboxChecked = isCompleted;

    if (null !== taskCompletingStatus) {
        isSpinnerShown = taskCompletingStatus.isTaskCompleting;
        isCheckboxDisabled = isSpinnerShown;
        isCheckboxChecked = taskCompletingStatus.isCompleted;
    }

    return (
        <>
            <Checkbox
                className={'completeTaskCheckbox'}
                disabled={isCheckboxDisabled}
                defaultChecked={isCheckboxChecked}
                onChange={(event, isChecked) => changeCompletionCallback(taskId, isChecked)}
            />
            { isSpinnerShown &&
                <Spinner
                    className={'completeTaskSpinner'}
                    labelPosition="right"
                    size={SpinnerSize.medium}
                />
            }
        </>
    );
};

export default Complete;
