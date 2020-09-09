// Core
import React, {useState} from 'react';

// UI
import {
    TextField,
    Stack,
    PrimaryButton
} from '@fluentui/react';

import {api} from "../../bus/taskManager/api";

const Add = () => {
    const [title, setTitle] = useState('');

    const onFormSubmit = event => {
        if (!title) {
            alert('Set title!');
        } else {
            api.tasks.create(title);
            setTitle('');
        }

        event.preventDefault();
    };

    const onTitleChanged = event => {
        console.log(event.target.value);
        setTitle(event.target.value);
    };

    return (
        <>
            <Stack horizontal>
                <form onSubmit={onFormSubmit}>
                    <TextField
                        name='title'
                        placeholder="Task description"
                        onChange={onTitleChanged}
                        value={title}
                    />
                    <PrimaryButton
                        type='submit'
                        text="Add task"
                    />
                </form>
            </Stack>
        </>
    )
};

export default Add;