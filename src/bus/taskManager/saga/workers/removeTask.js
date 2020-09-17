// Core
import { put, call, delay, } from 'redux-saga/effects';

// Other
import { taskManagerActions } from "../../actions";
import { api } from '../../api';

export function* removeTask(data) {
    const { payload: id } = data;

    try {
        yield put(taskManagerActions.removingTask(id, true));
        const response = yield call(api.tasks.remove, id);

        if (response.status !== 200) {
            if (response.status >= 400 && response.status <= 599) {
                yield put(taskManagerActions.renderErrorApiResponseMessage(response.status, true));
            }

            throw new Error('Something went wrong. Can\'t remove task!');
        }

        yield delay(1000);
        yield put(taskManagerActions.fetchTasksAsync());
    } catch (error) {
    } finally {
        yield put(taskManagerActions.removingTask(id, false));
    }
}
