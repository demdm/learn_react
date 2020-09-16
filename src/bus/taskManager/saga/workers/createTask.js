// Core
import { put, call, delay, } from 'redux-saga/effects';

// Other
import { taskManagerActions } from "../../actions";
import { api } from '../../api';

export function* createTask(data) {
    try {
        yield put(taskManagerActions.creatingTask(true));

        const { payload: title } = data;
        const createResponse = yield call(api.tasks.create, title);

        if (createResponse.status !== 201) {
            if (createResponse.status >= 400 && createResponse.status <= 599) {
                yield put(taskManagerActions.renderErrorApiResponseMessage(createResponse.status, true));
            }

            throw new Error('Something went wrong. Can\'t create task!');
        }

        const getAllResponse = yield call(api.tasks.getAll);
        const tasks = yield call([getAllResponse, getAllResponse.json]);

        if (getAllResponse.status !== 200) {
            if (createResponse.status >= 400 && createResponse.status <= 599) {
                yield put(taskManagerActions.renderErrorApiResponseMessage(createResponse.status, true));
            }

            throw new Error('Something went wrong. Can\'t get tasks!');
        }

        yield delay(1000);
        yield put(taskManagerActions.fillTasks(tasks));
    } catch (error) {
    } finally {
        yield put(taskManagerActions.creatingTask(false));
    }
}
