// Core
import { put, call, delay, } from 'redux-saga/effects';

// Other
import { taskManagerActions } from "../../actions";
import { api } from '../../api';
import { fetchTasks } from "./fetchTasks";

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

        const tasks = yield fetchTasks();

        yield delay(1000);
        yield put(taskManagerActions.fillTasks(tasks));
    } catch (error) {
    } finally {
        yield put(taskManagerActions.creatingTask(false));
    }
}
