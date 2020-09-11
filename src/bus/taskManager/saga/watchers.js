// Core
import { takeEvery, all, call } from 'redux-saga/effects';

// Type
import { types } from '../types';

import { fetchTasks } from './workers/fetchTasks';

function* watchFetchTasks() {
    yield takeEvery(types.TASK_MANAGER_FETCH_TASKS_ASYNC, fetchTasks);
}

export function* watchTaskManager() {
    yield all([
        call(watchFetchTasks)
    ]);
}
