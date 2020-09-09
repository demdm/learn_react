// Core
import React from 'react';

// Elements
import { Task } from '../../../../elements/task';
import Add from '../../../../elements/task/add';
import Remove from '../../../../elements/task/remove';

// UI
import {
    Fabric,
    MarqueeSelection,
    DetailsList,
} from '@fluentui/react';

export const List = ({ items }) => {
    // const listJSX = items.map((
    //     {
    //         id,
    //         title,
    //         isCompleted
    //     }
    // ) => (
    //     <Task
    //         key={id}
    //         label={title}
    //         isCompleted={isCompleted}
    //     />
    // ));

    return (
        <>
            <Fabric>
                <Add/>
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
                                    />
                                ),
                            },
                            {
                                name: 'Remove',
                                onRender: task => (
                                    <Remove
                                        taskId={task.id}
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