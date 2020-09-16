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
        taskCompletionStatus: {
            id: checkedTaskId,
            isTaskCompleting,
            isCompleted: wasCompleted,
        }
    } = useSelector(state => state.taskManager);

    const isSpinnerShown = isTaskCompleting && taskId === checkedTaskId;
    const isCheckboxDisabled = isSpinnerShown;
    const isCheckboxChecked = wasCompleted !== null && taskId === checkedTaskId ? wasCompleted : isCompleted;

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
