// Core
import React from 'react';

// UI
import {
    TextField,
    Stack,
    PrimaryButton
} from '@fluentui/react';

const Add = () => {
    return (
        <>
            <Stack horizontal>
                <TextField
                    placeholder="Task description"
                />
                <PrimaryButton
                    text="Add task"
                />
            </Stack>
        </>
    )
};

export default Add;