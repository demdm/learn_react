// Core
import { put, call, delay, } from 'redux-saga/effects';

// Other
import { taskManagerActions } from "../../actions";
import { api } from '../../api';

export function* createTask(data) {
    try {
        yield put(taskManagerActions.creatingTask(true));

        const { payload: title } = data;
        const response = yield call(api.tasks.create, title);

        if (response.status !== 201) {
            if (response.status >= 400 && response.status <= 599) {
                yield put(taskManagerActions.renderErrorApiResponseMessage(response.status, true));
            }

            throw new Error('Something went wrong. Can\'t create task!');
        }

        yield delay(1000);
        yield put(taskManagerActions.fetchTasksAsync());
    } catch (error) {
    } finally {
        yield put(taskManagerActions.creatingTask(false));
    }
}
