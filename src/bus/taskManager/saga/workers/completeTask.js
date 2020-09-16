// Core
import {call, delay, put} from 'redux-saga/effects';

// Other
import { taskManagerActions } from "../../actions";
import { api } from '../../api';

export function* completeTask(data) {
    const { payload: { id, isCompleted } } = data;

    try {
        yield put(taskManagerActions.completingTask(id, isCompleted, true));

        const response = yield call(api.tasks.changeCompletion, id, isCompleted);

        if (response.status !== 200) {
            throw new Error('Something went wrong. Can\'t complete task!');
        }

        yield delay(1000);
    } catch (error) {
    } finally {
        yield put(taskManagerActions.completingTask(id, isCompleted, false));
    }
}
