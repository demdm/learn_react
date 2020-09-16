// Core
import { put, call, delay, } from 'redux-saga/effects';

// Other
import { taskManagerActions } from "../../actions";
import { api } from '../../api';

export function* removeTask(data) {
    const { payload: id } = data;

    try {
        yield put(taskManagerActions.removingTask(id, true));
        const removeResponse = yield call(api.tasks.remove, id);

        if (removeResponse.status !== 200) {
            if (removeResponse.status >= 400 && removeResponse.status <= 599) {
                yield put(taskManagerActions.renderErrorApiResponseMessage(removeResponse.status, true));
            }

            throw new Error('Something went wrong. Can\'t remove task!');
        }

        const getAllResponse = yield call(api.tasks.getAll);
        const tasks = yield call([getAllResponse, getAllResponse.json]);

        if (getAllResponse.status !== 200) {
            if (getAllResponse.status >= 400 && getAllResponse.status <= 599) {
                yield put(taskManagerActions.renderErrorApiResponseMessage(getAllResponse.status, true));
            }

            throw new Error('Something went wrong. Can\'t get tasks!');
        }

        yield delay(1000);
        yield put(taskManagerActions.fillTasks(tasks));
    } catch (error) {
    } finally {
        yield put(taskManagerActions.removingTask(id, false));
    }
}
