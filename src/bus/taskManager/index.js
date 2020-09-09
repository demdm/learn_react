// Core
import React from 'react';
import { Text } from '@fluentui/react';

// Components
import { List } from './components/list';

// Elements
import { useTaskManager } from './hooks/useTaskManager';

export const TaskManager = () => {
    const {tasks} = useTaskManager();

    return (
        <div>
            <Text variant='xLarge'>
                Task Manager
            </Text>
            <List items={tasks} />
        </div>
    );
};
