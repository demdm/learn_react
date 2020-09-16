import React from 'react';
import { useSelector } from "react-redux";
import {
    Checkbox,
    Spinner,
    SpinnerSize,
} from '@fluentui/react';
import './complete.css';

const Complete = ({ taskId, isCompleted, label, changeCompletionCallback }) => {
    const {
        taskCompletionStatus
    } = useSelector(state => state.taskManager);

    let isSpinnerShown = false,
        isCheckboxDisabled = false,
        isCheckboxChecked = isCompleted;

    taskCompletionStatus.forEach(item => {
        if (item.id === taskId) {
            isSpinnerShown = item.isTaskCompleting;
            isCheckboxDisabled = isSpinnerShown;
            isCheckboxChecked = item.isCompleted !== null ? item.isCompleted : isCompleted;
            return true;
        }
    });

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
