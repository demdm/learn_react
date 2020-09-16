import React from 'react';
import {
    Checkbox,
    Spinner,
    SpinnerSize,
} from '@fluentui/react';
import { useSelector } from "react-redux";

const Complete = ({ taskId, isCompleted, label, changeCompletionCallback }) => {
    const {
        taskCompletionStatus: {
            id: checkedTaskId = null,
            isTaskCompleting: isSpinnerShown = false,
            isCompleted: wasCompleted = null,
        } = {
            checkedTaskId: null,
            isSpinnerShown: false,
            wasCompleted: null,
        }
    } = useSelector(state => state.taskManager);

    const isCheckboxChecked = wasCompleted !== null && taskId === checkedTaskId ? wasCompleted : isCompleted;

    return isSpinnerShown && taskId === checkedTaskId
        ? <Spinner
            labelPosition="right"
            label={isCheckboxChecked ? 'Competing...' : 'Uncompeting...' }
            size={SpinnerSize.medium}
        />
        : <Checkbox
            disabled={isSpinnerShown}
            defaultChecked={isCheckboxChecked}
            onChange={(event, isChecked) => changeCompletionCallback(taskId, isChecked)}
        />
    ;
};

export default Complete;
