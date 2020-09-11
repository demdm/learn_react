// Core
import React from 'react';
import { Provider } from 'react-redux';
import { Text, initializeIcons } from '@fluentui/react';

// Instruments
import { store } from './init/store';

// Domains
import { TaskManager } from './bus/taskManager';

initializeIcons();

export const App = () => (
    <Provider store={store}>
        <Text variant='mega'>
            App
        </Text>
        <TaskManager />
    </Provider>
);
