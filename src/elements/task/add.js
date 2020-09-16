import React, { useState } from 'react';
import { useSelector } from "react-redux";
import {
    TextField,
    Stack,
    PrimaryButton,
    Text,
    MessageBar,
    MessageBarType,
    Spinner,
    SpinnerSize,
} from '@fluentui/react';

const Add = ({ addTaskCallback }) => {
    const { isTaskCreating: isFormDisabled } = useSelector(state => state.taskManager);

    const [title, setTitle] = useState('');
    const [isErrorShown, setIsErrorShown] = useState(false);

    const onFormSubmit = event => {
        if (title) {
            addTaskCallback(title);
            setTitle('');
            setIsErrorShown(false);
        } else {
            setIsErrorShown(true);
        }

        event.preventDefault();
    };

    const onTitleChanged = event => setTitle(event.target.value);

    return (
        <>
            <Stack horizontal style={{
                background: '#e9e9e9',
                padding: 20,
                borderRadius: 5,
                width: 'max-content'
            }}>
                <form onSubmit={onFormSubmit}>
                    { isErrorShown &&
                        <MessageBar
                            messageBarType={MessageBarType.error}
                            isMultiline={false}
                            dismissButtonAriaLabel="Close"
                        >
                            Specify a title!
                        </MessageBar>
                    }

                    <Text variant='large' nowrap block>
                        Add task
                    </Text>
                    <br/>

                    <TextField
                        name='title'
                        placeholder="Task description"
                        onChange={onTitleChanged}
                        value={title}
                    />
                    <br/>

                    <PrimaryButton
                        type='submit'
                        text={
                            isFormDisabled
                                ? <Spinner size={SpinnerSize.medium}/>
                                : 'Add task'
                        }
                        disabled={isFormDisabled}
                    />
                </form>
            </Stack>
        </>
    )
};

export default Add;