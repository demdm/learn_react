// Core
import { takeEvery, all, call } from 'redux-saga/effects';

// Type
import { types } from '../types';

// Workers
import {
    fetchTasks,
    removeTask,
    createTask,
    completeTask,
} from './workers';


function* watchFetchTasks() {
    yield takeEvery(types.TASK_MANAGER_FETCH_TASKS_ASYNC, fetchTasks);
}

function* watchRemoveTask() {
    yield takeEvery(types.TASK_MANAGER_REMOVE_TASK_ASYNC, removeTask);
}

function* watchCreateTask() {
    yield takeEvery(types.TASK_MANAGER_CREATE_TASK_ASYNC, createTask);
}

function* watchCompleteTask() {
    yield takeEvery(types.TASK_MANAGER_COMPLETE_TASK_ASYNC, completeTask);
}

export function* watchTaskManager() {
    yield all([
        call(watchFetchTasks),
        call(watchRemoveTask),
        call(watchCreateTask),
        call(watchCompleteTask),
    ]);
}
