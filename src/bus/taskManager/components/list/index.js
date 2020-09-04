// Core
import React from 'react';

// Elements
import { Task } from '../../../../elements/task';

export const List = ({ items }) => {
    const listJSX = items.map((
        {
            id,
            title,
            isCompleted
        }
    ) => (
        <Task
            key={id}
            label={title}
            isCompleted={isCompleted}
        />
    ));

    return (
        <>
            {listJSX}
        </>
    )
};