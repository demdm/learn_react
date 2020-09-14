// Core
import { put, call, delay } from 'redux-saga/effects';

// Other
import { taskManagerActions } from "../../actions";
import { api } from '../../api';

export function* fetchTasks() {
    try {
        const response = yield call(api.tasks.getAll);
        const tasks = yield call([response, response.json]);

        if (response.status !== 200) {
            throw new Error('Something went wrong. Can\'t get tasks!');
        }

        yield delay(200);
        yield put(taskManagerActions.fillTasks(tasks));
    } catch (error) {
    } finally {
    }
}
