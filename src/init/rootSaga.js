// Core
import { all } from 'redux-saga/effects';

// Watcher
import {
    watchTaskManager,
} from '../bus/taskManager/saga/watchers';

export function* rootSaga() {
    yield all([ watchTaskManager() ]);
}
