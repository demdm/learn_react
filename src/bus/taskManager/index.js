// Core
import React from 'react';
import { Text } from '@fluentui/react';

// Components
import { List } from './components/list';

export const TaskManager = () => {
    return (
        <div>
            <Text variant='xLarge'>
                Task Manager
            </Text>
            <List />
        </div>
    );
};
