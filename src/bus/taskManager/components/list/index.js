// Core
import React from 'react';

// Elements
import { Task } from '../../../../elements/task';
import Add from '../../../../elements/task/add';
import Remove from '../../../../elements/task/remove';
import { useTaskManager } from '../../hooks/useTaskManager';

// UI
import {
    Fabric,
    MarqueeSelection,
    DetailsList,
} from '@fluentui/react';

export const List = ({ items }) => {
    let {
        deleteTask,
        createTask,
        changeTaskCompletion,
    } = useTaskManager();

    return (
        <>
            <Fabric
                style={{ width: 'max-content'}}
            >
                <Add
                    addTaskCallback={createTask}
                />
                <MarqueeSelection>
                    <DetailsList
                        items={items}
                        compact={true}
                        columns={[
                            {
                                name: 'ID',
                                fieldName: 'id',
                                minWidth: 16,
                                maxWidth: 16,
                            },
                            {
                                name: 'Task description',
                                fieldName: 'title',
                                minWidth: 260,
                            },
                            {
                                name: 'Complete',
                                fieldName: 'isCompleted',
                                minWidth: 124,
                                maxWidth: 124,
                                onRender: task => (
                                    <Task
                                        taskId={task.id}
                                        label={task.title}
                                        isCompleted={task.isCompleted}
                                        changeCompletionCallback={changeTaskCompletion}
                                    />
                                ),
                            },
                            {
                                name: 'Remove',
                                onRender: task => (
                                    <Remove
                                        taskId={task.id}
                                        removeTaskCallback={deleteTask}
                                    />
                                ),
                            },
                        ]}
                        // selectionMode={SelectionMode.multiple}
                        getKey={(item, index) => item.id}
                        setKey='multiple'
                        // layoutMode={DetailsListLayoutMode.justified}
                        isHeaderVisible={true}
                        // selection={this._selection}
                        selectionPreservedOnEmptyClick={false}
                        // onItemInvoked={this._onItemInvoked}
                        enterModalSelectionOnTouch={false}
                        ariaLabelForSelectionColumn="Toggle selection"
                        ariaLabelForSelectAllCheckbox="Toggle selection for all items"
                        checkButtonAriaLabel="Row checkbox"
                    />
                </MarqueeSelection>
            </Fabric>
        </>
    )
};